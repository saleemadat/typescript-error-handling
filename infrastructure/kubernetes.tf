module "k8s_pod_aws_role" {
  source = "git::git@github.com:NateAI/nate.infrastructure.modules.git//modules/role?ref=v2.63.0"
  //source = "../../../../../../nate.infrastructure.modules/modules/role"

  // Role
  aws_iam_role_name         = "${var.environment}-${var.dominion}-${var.subdominion}"
  aws_region                = var.aws_region
  role_assumption_statement = local.aws_role_assumption_statement

  policies = [
    "shared-ec2-default",
    "AmazonEC2ContainerRegistryReadOnly"
  ]

  // Tags
  environment  = var.environment
  owner        = var.owner
  dominion     = var.dominion
  subdominion  = var.subdominion
  version_name = var.version_name
}