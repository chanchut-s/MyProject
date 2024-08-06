'use client'

import React from 'react'
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

// "http://localhost:1337"+blogPersonnal.attributes.Image.data?.[0].attributes.formats.medium.url
function CardPersonnel({ blogPersonnal }) {
  return (
    <Card className="w-[20rem] ">
      <Link href={`personnelProfile/${blogPersonnal.id}`}>
        <CardHeader floated={false} className="h-72">
          <img src={"http://localhost:1337" + blogPersonnal.attributes.Image.data?.[0].attributes.formats.medium.url} />
        </CardHeader>
      </Link>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {blogPersonnal.attributes.NameTH}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {blogPersonnal.attributes.Email}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {blogPersonnal.attributes.telephone}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-1">
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            Facesbook
          </Typography>
        </Tooltip>
      </CardFooter>

    </Card>
  )
}

export default CardPersonnel