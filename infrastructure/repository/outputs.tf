output "ecr_repository_repository_url" {
  value = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.aws_region}.amazonaws.com/nate-${var.aws_region}-${var.dominion}-${var.subdominion}-${var.version_name}-ecr"
}
