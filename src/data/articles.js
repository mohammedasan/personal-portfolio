import React from "react";

function article_1() {
	return {
		date: "10 October 2023",
		title: "Optimizing React.js Performance: Best Practices and Techniques",
		description:
			"In this in-depth article, I explore the strategies and techniques essential for optimizing React.js performance, a critical aspect of modern web development. As React.js continues to gain popularity for building interactive and dynamic user interfaces, understanding how to optimize performance becomes paramount for delivering a seamless user experience.",
		keywords: [
			"Optimizing React.js Performance: Best Practices and Techniques",
			"Mohammed Asan",
			"Asan",
			"Mohammed Asan",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "18 October 2023",
		title: "Mastering MySQL: A Comprehensive Guide to Database Management",
		description:
			"MySQL stands as one of the most popular and powerful relational database management systems, playing a pivotal role in modern web development, data-driven applications, and enterprise solutions. In this comprehensive guide, we delve into the intricacies of MySQL, exploring its features, capabilities, and best practices for efficient database management.",
		style: ``,
		keywords: [
			"Mastering MySQL: A Comprehensive Guide to Database Management",
			"Mohammed Asan",
			"Mohammed Asan I",
			"Mohammed Asan I",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
