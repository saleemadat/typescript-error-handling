resource "aws_ecr_repository" "default" {
  name  = "nate-${var.aws_region}-${var.dominion}-${var.subdominion}-${var.version_name}-ecr"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    environment  = var.environment
    dominion     = var.dominion
    subdominion  = var.subdominion
    owner        = var.owner
    version_name = var.version_name
  }
}
