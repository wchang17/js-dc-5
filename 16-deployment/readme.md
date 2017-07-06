# Class 17: Deployment
For our last lesson, we'll cover making our applications live and
publishing them so that others can see and use them!

## Learning Objectives
- Understand the difference between static and dynamic applications
- Learn how to deploy static sites
- Learn how to deploy a dynamic site

## Key Takeaways
<details>
<summary>What is the difference between a static application and a dynamic one?</summary>

Dynamic: the front end of the application is built on demand in response to a request by a server.
Static: the front end of the application is already built and just sent to the client.

</details>

<details>
<summary>How do you deploy a static application to GitHub Pages</summary>

GitHub Pages uses a reserved branch called `gh-pages`. For any repository, you can checkout the `gh-pages`
branch and push to your remote repository and your site will be available in a few minutes.

1. From `master`, run `git checkout -b gh-pages`
2. Then run `git push origin gh-pages`

To update your site or application, switch back to `master` with `git checkout master`, make your changes,
then switch back to `gh-pages` with `git checkout gh-pages` and merge your changes into `gh-pages` with `git
merge master`. After that, you can push with `git push origin gh-pages`.

</details>

<details>
<summary>How do you deploy a dynamic application to Heroku</summary>

This assumes you've set up your account and installed the Heroku CLI.

1. Create a `Procfile`
2. Update your `package.json` to include a `start` script and the `engines` your application needs to run
3. Create the application with `heroku create`
4. Push your application to heroku with `git push heroku master`

If you run in to errors, check the common gotcha's from [the slides](https://ga-students.github.io/JS-DC/16-deployment/#/6/5).

</details>

## Materials
- [Slides](https://ga-students.github.io/JS-DC/17-deployment)
- [Lesson Notes](17-deployment/lesson_plan.md)

## Assignment
Your assignment for next class is to review your notes on deployment and to get started on your final project.
The deliverables for next class are:
- Create a new repository under your own GitHub account for your final project.
- Clone the repository locally (NOT in to an existing repository!) and add a `readme.md` or edit the one created by GitHub
- Add a short description of your project
- Add a short description of your UI and the views of your application
- Draft the technical requirements of your application, specifically the features you'll build out and how each filter will work. 3 features tends to be the sweet spot for final projects. 
- Add a link to your final project repository to the file you created in the `final-projects/` folder of the class repository listing your project ideas. Add, Commit, Push, and make a Pull Request. In the comments of the pull request (where you answer the 3 questions) paste the link to your final project again.

See the sample in the `final-project/` folder of the class repository, `sample-readme.md`, for how to flush our the readme file you're creating.

__Feel free to get started on your project!__

## Supplemental resources
- [Wireframes - The Beginner's Guide](http://theuxreview.co.uk/wireframes-beginners-guide/)
- [All you need to know about customer journey mapping](https://www.smashingmagazine.com/2015/01/all-about-customer-journey-mapping/)
- [GitHub Pages](https://pages.github.com/)
