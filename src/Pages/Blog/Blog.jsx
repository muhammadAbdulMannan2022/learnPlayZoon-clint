import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>LPZ || Blog</title>
      </Helmet>
      <div className="p-5 flex items-start justify-center flex-wrap gap-2">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p>
              <span className="text-xl font-bold">Answer : </span>
              An access token is like a key. If you have the key, you can open
              the lock in this scene. If you have access token you can get data
              if you don't you will not get any data. <br />
              on the other hand refresh token are used to revalid your expired
              access token if it possible and give you the permission to access
              data. <br />
              we should store them on client side on HTTP only cookie.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">2. Compare SQL and NoSQL databases?</h2>
            <span className="text-xl font-bold">Answer : </span>
            <span className="text-xl font-bold">i. </span>
            SQL DB follow the relational data model on the other hand NoSQL DB
            don't follow any fixed data model. <br />
            <span className="text-xl font-bold">ii. </span>
            SQL DB Use Structured Query Language (SQL) for data manipulation and
            retrieval NoSQL DB Use different query languages ​including but not
            limited to SQL. <br />
            <span className="text-xl font-bold">iii. </span>
            Examples of SQL: MySQL, PostgreSQL, Oracle Database. <br />
            Examples of NoSQL: MongoDB, Cassandra, Redis.
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              3. What is express js? What is Nest JS?
            </h2>
            <span className="text-xl font-bold">Answer : </span>
            <span className="text-xl font-bold">i. Express.js</span>
            Express.js is a popular web application framework for Node.js.
            Express.js allows developers to handle HTTP requests, define routes,
            implement middleware functions, and manage various aspects of web
            application development.
            <br />
            <span className="text-xl font-bold">ii. Nest JS </span>
            NestJS is a progressive Node.js framework for building scalable and
            efficient server-side applications.It is built on top of Express.js
            and utilizes TypeScript as its primary language.It provides features
            like dependency injection, decorators, powerful CLI, built-in
            validation, and support for various databases and messaging systems.
            <br />
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              4. What is MongoDB aggregate and how does it work?
            </h2>
            <span className="text-xl font-bold">Answer : </span>
            <span className="text-xl font-bold">
              i. What is MongoDB aggregate?
            </span>
            MongoDB's Aggregation Framework is a powerful tool for processing
            and analyzing data in MongoDB. It allows you to perform complex data
            manipulations, transformations, and aggregations on MongoDB
            collections.
            <br />
            <span className="text-xl font-bold">
              ii. how does MongoDB aggregate work?{" "}
            </span>
            The Aggregation Framework operates on the concept of a pipeline,
            which consists of multiple stages that are applied sequentially to
            the data. Each stage performs a specific operation on the input data
            and passes the modified data to the next stage. <br /> example :
            Pipeline Stages ($match, $group, $sort, $project, $limit)
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
