# Continous Compliance

## Infrastructure

At the moment we provisioned an storage bucket in Google Cloud called **count-dracula-continous-compliance-prod**

To modify or provision more infrastruture do the following:

1. Navigate to the environment folder that you want to use:

   ```sh
   cd infrastructure/environments/production
   ```

2. Create an `.env` file with the contents of `.env.example`

   ```sh
   cat .env.example >> .env
   ```

3. Ask to [Anubha](anubha.singh@red-badger.com), [Dimple](anubha.singh@red-badger.com), [Pedro](pedro.martin@red-badger.com) or [Tim](tim.lee@red-badger.com) the service account credentials

4. Initialize Terraform

   ```sh
   terraform init
   ```

5. 🚀
