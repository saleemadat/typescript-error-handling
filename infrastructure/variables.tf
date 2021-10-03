variable "aws_region" {
  type    = string
}

variable "environment" {
  type    = string
}

variable "dominion" {
  type    = string
}

variable "subdominion" {
  type    = string
}

variable "owner" {
  type    = string
}

variable "version_name" {
  type    = string
}

variable "state_store_bucket" {
  type    = string
  default = "nate-terraform-state-store"
}
