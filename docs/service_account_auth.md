# Service Account Authentication

A quick note for future reference on how to authenticate the service
accounts through the GitHub Actions.

Instead of exporting a key file, we use Workload Identity Federation.

1. https://www.youtube.com/watch?v=ZgVhU5qvK1M

We do not set up WIF through terraform, one because it does not appear to
be supported currently (from an initial search). Also, we do not want
to store information about the identity pool or provider in our IaC.
Currently, this has to be done manually. The Google console is pretty intuitive,
but can also be done through the gcloud CLI.

After setting up WIF in the Google cloud console, get the ID of the pool and provider in the format
of `projects/<project-number>/locations/global/workloadIdentityPools/<pool-name>/providers/<provider-name>`
and set it as an GH deployment environment secret `WIF_PROVIDER`

Get the email of the service account and set it as a GH deployment
environment secret `SA_EMAIL`
