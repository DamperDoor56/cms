# Welcome to this project :tada:

Hey there! Thank you for passing by, in this README I'll explain everything you need to know about strapi, how to dump and restore the database, so please, have a coffe and read calmly :) 

# Getting started :zap:
![alt-text](https://repository-images.githubusercontent.com/43441403/97069080-d012-11ea-9317-a871d5105486)


## With cloning :busts_in_silhouette:

Let's start with cloning this repository 

### Prerequisites :wrench:
 For the strapi version I used to build this project, you need to have this versions:

| Strapi | Node | npm|
| ------ | ------ |  ------|
|     v4.3.8   |     v16.x.x   |  v6.x.x|

If you use yarn, every version is good!

### Cloning :busts_in_silhouette:
On GitHub.com, navigate to the main page of the repository. Above the list of files, click Code.

![alt text](https://docs.github.com/assets/cb-20363/images/help/repository/code-button.png)

Copy the URL for the repository, open Git Bash. Change the current working directory to the location where you want the cloned directory.

```
$cd desktop

```
Type git clone, and then paste the URL you copied earlier.
```
$ git clone https://gitlab.com/LudmiDev/cms.git

```
Press Enter to create your local clone.

```
$ git clone https://gitlab.com/LudmiDev/cms.git
> Cloning into `desktop`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
Then, put npm install, to install all the dependencies

```
npm install 
# or 
yarn add 
```
Then, put npm run develop to watch the project in your localhost

```
npm run develop
# or
yarn develop
```
Yay :tada: you're now in strapi locally!

![alt-image-window](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674081982/imagen_2023-01-18_194620654_puzjhg.png)

Put /admin in the link or the localhost, and log in or register ;)

![alt-image-strapi-admin](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674082156/imagen_2023-01-18_194914112_jpjxju.png)

Congratulations! You're in the main page!

![strapi-main](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674082248/imagen_2023-01-18_195046488_loveqn.png)

You can browse freely the content manager section, and the content type builder. You can even create your own schema and watch the changes on the database!

# Getting started with the Database :card_file_box:
This part is not easy, but I'll do my best to help you.
First of all, you need to install **PostgreSQL**, [this link](https://www.postgresql.org/download/) will take you to the download page.

Also you need to install **pgAdmin 4**, here's the [download link](https://www.pgadmin.org/download/).

Nice job! You're alredy made half the labor!

## pgAdmin 4 :construction_worker:
Open up pgAdmin, and make a new server

![pgAdminphoto](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674662340/Captura_ltvivq.png)

In the name of the server, you can put whatever you want, be creative! But on these fields, you need to put this information.
The data is listed here:

- host: containers-us-west-28.railway.app
- password: SRhMFswwMYAyArEIRjBE
- port: 5639


![pgAdminServer](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674663720/asasas_yj36e2.png)

There you go! You have now access to the database, you can browse the tables freely :)

![pgAdminDB](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674663834/pasoaps_xsyzt5.png)

# How to backup the database? :thinking_face:

In order to make a backup of the database, first we need to make a **dump**. 
What is a dump? Is an output of data that can help us to back up the database. 

So let's get hands on this!
I'm gonna assume you're a windows user, so first of all, we got to execute CMD as administrator

![cmd](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674233752/open-cmd-with-admin-rights_bgmvqy.png)

Then, you need to travel by cd to the bin folder of the PostgreSQL folder, like this!


![cmdtravel](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674233892/assaasassa_hfacme.png)

You can copy the code to make this proccess easier


```
cd ..

cd ..

cd "Program Files"

cd PostgreSQL

cd 15

cd bin
```
Well done! Now we need to write this command: 

```
pg_dump -U postgres -W -h containers-us-west-127.railway.app -p 5639 railway > <name of the dump :) >.sql

```
And then, is gonna ask you the password, if you forgot it, there you have it ;)
```
SRhMFswwMYAyArEIRjBE

```

If you travel to 
```C:\Program Files\PostgreSQL\15\bin```
you'll notice that the dump was successfully created.

![pros](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674234433/assasssss_jl2djn.png)

Well done! You made your dump :D

# Making a backup database with the dump data :hammer:

Ok with this dump we made, we can finally back up our database into another one.
First, we open pgAdmin 4 again, and we'll create a database.

![database](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674663984/asasassdffgg_ufe3dv.png)

Put it a cool name, and then, we'll move on to CMD

We'll open CMD as admin again, and browse to get to ```C:\Program Files\PostgreSQL\15\bin```
and put this command

```
psql -h containers-us-west-28.railway.app -p 5639 -U postgres -f <nameOfDump>.sql <name-of-database-you-just-created>
```
Wait a little bit, and :

![pgadmindb](https://res.cloudinary.com/dweiaqd6l/image/upload/v1674235017/nice_done_gw0vqh.png)

Well done! You successfully restored data from the dump, and made a cool backup! :D



