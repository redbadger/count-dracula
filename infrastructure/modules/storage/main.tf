resource "google_storage_bucket" "count_dracula_continous_compliance_bucket" {
  name     = var.bucket_name
  location = "EUROPE-WEST2"
  # resource_group_name= var.resource_group_name
}
