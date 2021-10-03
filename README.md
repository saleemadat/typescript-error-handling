<img align="right" src="https://github.com/nateai/nate.template.microservice.ts/blob/develop/docs/assets/nate-logo.jpeg" />

# nate.template.microservice.ts

A devops template for a microservice using k8s.

## After creating your first repository

After creating a new repository, please make sure you `configure` the project by running:

```
bin/configure
```

This will setup the environment variables, populate your terraform state keys and various other bits and bobs.

## Dev to Prod in an hour

To deploy a microservice all the way to production in an hour you can run the following commands:

```
bin/install
configure
infra-create dev 3
infra-create staging 2
infra-create prod 1
```

## Destroying k8s and infra
To tear down the k8s components and infra for a microservice environment use the following commands
```
bin/kdestroy dev (note that this will destroy the k8s namespace and everything under it. However it will not remove the route53 record and an IAM role)
bin/infra-destroy dev
```
