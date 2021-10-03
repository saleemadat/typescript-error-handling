terraform {
  required_version = "= 0.13.1"
  backend "s3" {
    key = "eu-west-1/services/nate-microservice-ecr/terraform.tfstate"
  }
}

provider "aws" {
  region  = var.aws_region
  version = "~> 3.0"
}
