locals {

  base_name = "${var.environment}-${var.dominion}-${var.subdominion}"

  aws_role_assumption_statement = [
    {
      actions = ["sts:AssumeRoleWithWebIdentity"]
      principals = [
        {
          identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/${data.terraform_remote_state.k8s_cluster.outputs.oidc_url}"]
          type        = "Federated"
        },
      ]
      condition = [
        {
          test     = "StringEquals"
          variable = "${data.terraform_remote_state.k8s_cluster.outputs.oidc_url}:sub"
          values   = ["system:serviceaccount:${local.base_name}-${var.version_name}-namespace:${local.base_name}-${var.version_name}-service-account"]
        },
      ]
    },
  ]
}