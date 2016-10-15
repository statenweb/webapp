# config valid only for current version of Capistrano

set :application, '{{ qa_server }}'
set :repo_url, '{{ git_repo }}'
set :log_level, :info
set :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :linked_files, fetch(:linked_files, []).push('.env')
set :linked_dirs, fetch(:linked_dirs, []).push('web/app/uploads').push('web/app/wp-rocket-config')



namespace :deploy do
  desc 'Restart application'
  task :restart do
    on roles(:app) do
    	within release_path do
	      
	      execute :composer, :install
	      execute :npm, :install
          execute :bower, :install
          execute :grunt


	  end
    end
  end
end

after 'deploy:publishing', 'deploy:restart'

