provider "google" {
  project     = "count-dracula-production"
  region      = "europe-west2-b"
}


module "storage" {
  source = "../../modules/storage"
  bucket_name = var.CONTINOUS_COMPLIANCE_BUCKET_NAME
  resource_group_name = var.CONTINOUS_COMPLIANCE_RESOURCE_GROUP_NAME
}
