data "aws_caller_identity" "current" {}

data "terraform_remote_state" "vpc" {
  backend = "s3"

  config = {
    bucket = var.state_store_bucket
    key    = "${var.aws_region}/${var.environment}/vpc/default/terraform.tfstate"
  }
}

data "terraform_remote_state" "k8s_cluster" {
  backend = "s3"
  config = {
    bucket = var.state_store_bucket
    key    = "${var.aws_region}/${var.environment}/eks/terraform.tfstate"
  }
}
