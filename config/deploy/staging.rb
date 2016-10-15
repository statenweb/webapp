set :stage, :staging
set :deploy_to, -> { "/home/ubuntu/#{fetch(:application)}/public" }

server '{{ qa_server }}', user: 'ubuntu', roles: %w{web app db}


fetch(:default_env).merge!(wp_env: :staging)