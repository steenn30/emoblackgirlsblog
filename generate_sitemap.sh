#!/bin/bash

# Path to the cleaned JSON file containing the articles
cleaned_json_file="./cleaned_articles.json"  # File with sanitized JSON

# Check if the cleaned JSON file exists before proceeding
if [ ! -f "$cleaned_json_file" ]; then
  echo "The file $cleaned_json_file does not exist."
  exit 1
fi

# Function to generate slug based on article title and ID
generateSlug() {
  # Convert title to lowercase, remove special characters, replace spaces with hyphens, and trim
  local title=$1
  local id=$2
  local slug

  slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9\s-]//g' | sed 's/\s\+/-/g' | sed 's/^\s*//;s/\s*$//')
  # Add the ID to the slug to ensure uniqueness
  echo "$slug-$id"
}

# Create/overwrite the sitemap file with XML header
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" > sitemap.xml
echo "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">" >> sitemap.xml

# Add homepage entry
echo "  <url>" >> sitemap.xml
echo "    <loc>https://emoblackgirls.com</loc>" >> sitemap.xml
echo "    <lastmod>2025-03-22</lastmod>" >> sitemap.xml
echo "    <priority>1.0</priority>" >> sitemap.xml
echo "  </url>" >> sitemap.xml

# Add articles listing page entry
echo "  <url>" >> sitemap.xml
echo "    <loc>https://emoblackgirls.com/article</loc>" >> sitemap.xml
echo "    <lastmod>2025-03-22</lastmod>" >> sitemap.xml
echo "    <priority>0.8</priority>" >> sitemap.xml
echo "  </url>" >> sitemap.xml

# Use the sanitized JSON from the file for sitemap generation
cat "$cleaned_json_file" | jq -c '.[]' | while read -r article; do
  # Parse the sanitized JSON
  id=$(echo "$article" | jq -r '.id')
  title=$(echo "$article" | jq -r '.title')
  timestamp=$(echo "$article" | jq -r '.timestamp')

  # If any of the fields are empty, log the error and skip this entry
  if [[ -z "$id" || -z "$title" || -z "$timestamp" ]]; then
    echo "Error: Missing data for article, skipping..."
    continue
  fi

  # Generate slug using the function
  slug=$(generateSlug "$title" "$id")

  # Append each article URL entry directly to the sitemap file
  echo "  <url>" >> sitemap.xml
  echo "    <loc>https://emoblackgirls.com/article/$slug</loc>" >> sitemap.xml
  echo "    <lastmod>$timestamp</lastmod>" >> sitemap.xml
  echo "    <priority>0.7</priority>" >> sitemap.xml
  echo "  </url>" >> sitemap.xml
done

# Close the sitemap XML tag
echo "</urlset>" >> sitemap.xml

# Inform the user the sitemap was generated successfully
echo "Sitemap generated and saved as sitemap.xml."
