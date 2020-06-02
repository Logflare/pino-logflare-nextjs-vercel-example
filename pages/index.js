import React, { useEffect, useState } from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import { prepObjectKeys } from "../logger/utils"

const logger = require('../logger/logger').default

const Home = props => {

  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      logger.info("Getting date")

      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to Next (logging by Logflare)!</h1>
        <p className="description">
          To get started, edit the <code>pages/index.js</code> or{' '}
          <code>pages/api/date.js</code> files, then save to reload.
        </p>

        <p className="row date">
          The date is:&nbsp;{' '}
          {date ? (
            <span>
              <b>{date.date}</b>
            </span>
          ) : (
              <span className="loading"></span>
            )}
        </p>

        <div className="row">
          <a className="card" href="https://github.com/zeit/next.js#setup">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on GitHub and in their examples.</p>
          </a>
          <a className="card" href="https://github.com/zeit/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
          <a className="card" href="https://github.com/zeit/next.js">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it!</p>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps(context) {
  const headers = prepObjectKeys(context.req.headers)

  logger.info({
    request: {
      headers: headers,
      url: context.req.url,
      method: context.req.method
    },
    response: {
      statusCode: context.res.statusCode
    }
  },
    "PAROLLES: It is not politic in the commonwealth of nature to preserve virginity. Loss of virginity is rational increase, and there was never virgin got till virginity was first lost. That you were made of is metal to make virgins. Virginity by being once lost may be ten times found  by being ever kept is ever lost. 'Tis too cold a companion. Away with't! 'Tis against the rule of nature. To speak on the part of virginity is to accuse your mothers, which is most infallible disobedience. He that hangs himself is a virgin  virginity murders itself, and should be buried in highways out of all sanctified limit, as a desperate offendress against nature. Virginity breeds mites, much like a cheese, consumes itself to the very paring, and so dies with feeding his own stomach. Besides, virginity is peevish, proud, idle, made of self-love, which is the most inhibited sin in the canon. Keep it not  you cannot choose but lose by't. Out with't! Within ten year it will make itself ten, which is a goodly increase, and the principal itself not much the worse. Away with't! 'Tis a commodity will lose the gloss with lying: the longer kept, the less worth. Off with't while 'tis vendible  answer the time of request. Virginity, like an old courtier, wears her cap out of fashion, richly suited, but unsuitable, just like the brooch and the toothpick, which wear not now. Your date is better in your pie and your porridge than in your cheek  and your virginity, your old virginity, is like one of our French withered pears: it looks ill, it eats drily. Marry, 'tis a withered pear  it was formerly better  marry, yet 'tis a withered pear! Will you anything with it? PAROLLES: It is not politic in the commonwealth of nature to preserve virginity. Loss of virginity is rational increase, and there was never virgin got till virginity was first lost. That you were made of is metal to make virgins. Virginity by being once lost may be ten times found  by being ever kept is ever lost. 'Tis too cold a companion. Away with't! 'Tis against the rule of nature. To speak on the part of virginity is to accuse your mothers, which is most infallible disobedience. He that hangs himself is a virgin  virginity murders itself, and should be buried in highways out of all sanctified limit, as a desperate offendress against nature. Virginity breeds mites, much like a cheese, consumes itself to the very paring, and so dies with feeding his own stomach. Besides, virginity is peevish, proud, idle, made of self-love, which is the most inhibited sin in the canon. Keep it not  you cannot choose but lose by't. Out with't! Within ten year it will make itself ten, which is a goodly increase, and the principal itself not much the worse. Away with't! 'Tis a commodity will lose the gloss with lying: the longer kept, the less worth. Off with't while 'tis vendible  answer the time of request. Virginity, like an old courtier, wears her cap out of fashion, richly suited, but unsuitable, just like the brooch and the toothpick, which wear not now. Your date is better in your pie and your porridge than in your cheek  and your virginity, your old virginity, is like one of our French withered pears: it looks ill, it eats drily. Marry, 'tis a withered pear  it was formerly better  marry, yet 'tis a withered pear! Will you anything with it? PAROLLES: It is not politic in the commonwealth of nature to preserve virginity. Loss of virginity is rational increase, and there was never virgin got till virginity was first lost. That you were made of is metal to make virgins. Virginity by being once lost may be ten times found  by being ever kept is ever lost. 'Tis too cold a companion. Away with't! 'Tis against the rule of nature. To speak on the part of virginity is to accuse your mothers, which is most infallible disobedience. He that hangs himself is a virgin  virginity murders itself, and should be buried in highways out of all sanctified limit, as a desperate offendress against nature. Virginity breeds mites, much like a cheese, consumes itself to the very paring, and so dies with feeding his own stomach. Besides, virginity is peevish, proud, idle, made of self-love, which is the most inhibited sin in the canon. Keep it not  you cannot choose but lose by't. Out with't! Within ten year it will make itself ten, which is a goodly increase, and the principal itself not much the worse. Away with't! 'Tis a commodity will lose the gloss with lying: the longer kept, the less worth. Off with't while 'tis vendible  answer the time of request. Virginity, like an old courtier, wears her cap out of fashion, richly suited, but unsuitable, just like the brooch and the toothpick, which wear not now. Your date is better in your pie and your porridge than in your cheek  and your virginity, your old virginity, is like one of our French withered pears: it looks ill, it eats drily. Marry, 'tis a withered pear  it was formerly better  marry, yet 'tis a withered pear! Will you anything with it? PAROLLES: It is not politic in the commonwealth of nature to preserve virginity. Loss of virginity is rational increase, and there was never virgin got till virginity was first lost. That you were made of is metal to make virgins. Virginity by being once lost may be ten times found  by being ever kept is ever lost. 'Tis too cold a companion. Away with't! 'Tis against the rule of nature. To speak on the part of virginity is to accuse your mothers, which is most infallible disobedience. He that hangs himself is a virgin  virginity murders itself, and should be buried in highways out of all sanctified limit, as a desperate offendress against nature. Virginity breeds mites, much like a cheese, consumes itself to the very paring, and so dies with feeding his own stomach. Besides, virginity is peevish, proud, idle, made of self-love, which is the most inhibited sin in the canon. Keep it not  you cannot choose but lose by't. Out with't! Within ten year it will make itself ten, which is a goodly increase, and the principal itself not much the worse. Away with't! 'Tis a commodity will lose the gloss with lying: the longer kept, the less worth. Off with't while 'tis vendible  answer the time of request. Virginity, like an old courtier, wears her cap out of fashion, richly suited, but unsuitable, just like the brooch and the toothpick, which wear not now. Your date is better in your pie and your porridge than in your cheek  and your virginity, your old virginity, is like one of our French withered pears: it looks ill, it eats drily. Marry, 'tis a withered pear  it was formerly better  marry, yet 'tis a withered pear! Will you anything with it? PAROLLES: It is not politic in the commonwealth of nature to preserve virginity. Loss of virginity is rational increase, and there was never virgin got till virginity was first lost. That you were made of is metal to make virgins. Virginity by being once lost may be ten times found  by being ever kept is ever lost. 'Tis too cold a companion. Away with't! 'Tis against the rule of nature. To speak on the part of virginity is to accuse your mothers, which is most infallible disobedience. He that hangs himself is a virgin  virginity murders itself, and should be buried in highways out of all sanctified limit, as a desperate offendress against nature. Virginity breeds mites, much like a cheese, consumes itself to the very paring, and so dies with feeding his own stomach. Besides, virginity is peevish, proud, idle, made of self-love, which is the most inhibited sin in the canon. Keep it not  you cannot choose but lose by't. Out with't! Within ten year it will make itself ten, which is a goodly increase, and the principal itself not much the worse. Away with't! 'Tis a commodity will lose the gloss with lying: the longer kept, the less worth. Off with't while 'tis vendible  answer the time of request. Virginity, like an old courtier, wears her cap out of fashion, richly suited, but unsuitable, just like the brooch and the toothpick, which wear not now. Your date is better in your pie and your porridge than in your cheek  and your virginity, your old virginity, is like one of our French withered pears: it looks ill, it eats drily.")

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home;
