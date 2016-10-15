set :stage, :staging
set :application, '{{ prod_directory }}'
set :deploy_to, -> { "/home/ubuntu/#{fetch(:application)}/public" }

server '{{ prod_server }}', user: 'ubuntu', roles: %w{web app db}


fetch(:default_env).merge!(wp_env: :staging)