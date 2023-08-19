terraform {
  cloud {
    organization = "asmir4development-org"

    workspaces {
      name = "junction2023"
    }
  }

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = "~> 1.5.5"
}


provider "aws" {
  region = "ap-northeast-2"
}

resource "aws_vpc" "main_vpc" {
  cidr_block = "10.0.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true
}

resource "aws_subnet" "public_subnet_one" {
  vpc_id = aws_vpc.main_vpc.id
  cidr_block = "10.0.0.0/24"
  availability_zone = "ap-northeast-2a"
  map_public_ip_on_launch = true
}

resource "aws_subnet" "public_subnet_two" {
  vpc_id = aws_vpc.main_vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "ap-northeast-2c"
  map_public_ip_on_launch = true
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main_vpc.id
}

resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.main_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }
}

resource "aws_route_table_association" "rta_subnet_one" {
  subnet_id = aws_subnet.public_subnet_one.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table_association" "rta_subnet_two" {
  subnet_id = aws_subnet.public_subnet_two.id
  route_table_id = aws_route_table.public_rt.id
}


resource "aws_security_group" "main_server_sg" {
  name = "junction-server-sg"
  description = "allow ssh and http access to the instance"
  vpc_id = aws_vpc.main_vpc.id
  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "main_server" {
  ami = "ami-0c9c942bd7bf113a2"
  instance_type = "t2.micro"
  key_name = "general"
  vpc_security_group_ids = [aws_security_group.main_server_sg.id]
  subnet_id = aws_subnet.public_subnet_one.id
}

resource "aws_instance" "main_server_new" {
  ami = "ami-0c9c942bd7bf113a2"
  instance_type = "t2.micro"
  key_name = "general"
  vpc_security_group_ids = [aws_security_group.main_server_sg.id]
  subnet_id = aws_subnet.public_subnet_one.id
}

resource "aws_eip" "main_server_eip" {
  instance = aws_instance.main_server.id
}

resource "aws_eip" "main_server_new_eip" {
  instance = aws_instance.main_server_new.id
}





























