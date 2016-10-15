Christine Dehart
-------------------------

Simple installation:

- Install Laravel Homestead locally and spin up the box (https://laravel.com/docs/4.2/homestead)

- Edit your homestead yaml so it looks something like this:

    ```
    ---
    ip: "192.168.10.10"
    memory: 2048
    cpus: 1
    provider: virtualbox
    
    authorize: ~/.ssh/id_rsa.pub
    
    keys:
        - ~/.ssh/id_rsa
    
    folders:
        - map: ~/Sites
          to: /home/vagrant/Sites
    
    sites:
        - map: dehart.dev
          to: /home/vagrant/Sites/dehart/web
    databases:
        - dehart
    ```
    
    
- Add a entry to your local hosts file: 192.168.10.10 dehart.dev

- Add a `.env` file to your project

- Run homestead provision

- navigate to dehart.dev you should be up and running

