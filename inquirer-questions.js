module.exports = [
    {
        type: 'input',
        name: 'theme_name',
        message: 'Theme Name, e.g. new project',
        default: 'new project'
    },
    {
        type: 'input',
        name: 'theme_slug',
        message: 'Theme Slug, e.g. new-project',
        default: 'new-project'
    },
    {
        type: 'input',
        name: 'git_repo',
        message: 'Git Repo URL, e.g. git@github.com:statenweb/wordpress-template.git',
        default: ''
    },
    {
        type: 'input',
        name: 'prod_directory',
        message: 'Directory this project will live on production, this can be changed in the Capistrano files',
        default: 'new-project.com'
    },
    {
        type: 'input',
        name: 'qa_directory',
        message: 'Directory this project will live on QA, this can be changed in the Capistrano files',
        default: 'new-project.com'
    },
    {
        type: 'input',
        name: 'prod_server',
        message: 'Production Server, this can be changed in the Capistrano files',
        default: '0.0.0.0'
    }, {
        type: 'input',
        name: 'qa_server',
        message: 'QA Server, this can be changed in the Capistrano files',
        default: 'qa.statenweb.com'
    }

];



