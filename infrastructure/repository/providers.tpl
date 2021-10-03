terraform {
  required_version = "= 0.13.1"
  backend "s3" {
    key = "{{TERRAFORM_STATE}}"
  }
}

provider "aws" {
  region  = var.aws_region
  version = "~> 3.0"
}
