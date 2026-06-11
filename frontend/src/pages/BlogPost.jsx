import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import AdSenseContainer from "../components/AdSenseContainer";
import { Calendar, Clock, ChevronLeft, ArrowRight, BookOpen } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  
  // Find current post
  const post = blogPosts.find((p) => p.slug === slug);

  // Fallback if post is not found
  if (!post) {
    return (
      <main className="dashboard-layout">
        <div className="card-container empty-state-premium" style={{ margin: "40px auto", maxWidth: "600px", padding: "60px 20px" }}>
          <div className="empty-state-icon-decor">
            <BookOpen className="empty-icon-animated" size={36} />
          </div>
          <h4>Article Not Found</h4>
          <p>We couldn't find the article you are looking for. It may have been moved or deleted.</p>
          <Link to="/blog" className="btn-action-generate" style={{ marginTop: "12px", textDecoration: "none" }}>
            Return to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Get other recommended articles (excluding current one, limit to 3)
  const recommendations = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="dashboard-layout">
      {/* Back to Blog Navigation */}
      <div style={{ marginBottom: "15px" }}>
        <Link to="/blog" className="back-link-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--navy-700)", fontWeight: "500", fontSize: "0.9rem" }}>
          <ChevronLeft size={16} /> Back to Blog Listing
        </Link>
      </div>

      <div className="dashboard-grid">
        {/* Left Column: Full Article Body */}
        <div className="dashboard-main">
          <article className="card-container blog-full-post">
            {/* Meta Tags */}
            <div className="blog-card-meta" style={{ marginBottom: "16px" }}>
              <span className="blog-badge-category">{post.category}</span>
              <div className="blog-meta-details">
                <span className="meta-text-item">
                  <Calendar size={13} style={{ marginRight: "4px" }} />
                  {post.date}
                </span>
                <span className="meta-text-item">
                  <Clock size={13} style={{ marginRight: "4px" }} />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* H1 Heading */}
            <h1 className="article-title">{post.title}</h1>
            <div className="article-author-info">
              <span>Published by <strong>{post.author}</strong></span>
              <span className="bullet-dot">•</span>
              <span>100% Verified Privacy Content</span>
            </div>

            {/* AdSense In-Article */}
            <AdSenseContainer type="infeed" slot="5555555556" />

            {/* Main Content Paragraphs & Subheadings */}
            <div className="article-body-content">
              {post.sections.map((section, index) => {
                if (section.type === "h2") {
                  return (
                    <h2 key={index} className="article-h2-heading">
                      {section.text}
                    </h2>
                  );
                } else {
                  return (
                    <p key={index} className="article-p-paragraph">
                      {section.text}
                    </p>
                  );
                }
              })}
            </div>

            {/* AdSense Under-Article */}
            <div style={{ marginTop: "30px" }}>
              <AdSenseContainer type="leaderboard" slot="5555555557" />
            </div>
          </article>
        </div>

        {/* Right Column: Sidebar Recommendations */}
        <aside className="dashboard-sidebar">
          {/* AdSense Sidebar Box */}
          <AdSenseContainer type="sidebar" slot="3333333334" />

          {/* Sidebar Recommendation Box */}
          <div className="info-card">
            <h3 className="sidebar-title">
              <BookOpen size={18} className="text-highlight-icon" style={{ marginRight: "8px" }} /> 
              More Articles
            </h3>
            <div className="sidebar-articles-list">
              {recommendations.map((rec) => (
                <div key={rec.slug} className="sidebar-article-item">
                  <span className="sidebar-article-category">{rec.category}</span>
                  <Link to={`/blog/${rec.slug}`} className="sidebar-article-title">
                    {rec.title}
                  </Link>
                  <Link to={`/blog/${rec.slug}`} className="sidebar-article-link">
                    Read <ArrowRight size={12} style={{ marginLeft: "2px" }} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* AdSense Skyscraper Block */}
          <AdSenseContainer type="skyscraper" slot="4444444445" />
        </aside>
      </div>
    </main>
  );
}
