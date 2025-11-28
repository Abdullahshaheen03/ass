import React, { useState } from 'react';
import './App.css';

// Dummy Data
const dummyUser = {
  name: 'abdullah shaheen',
  avatar: 'https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-1/455913453_2255806334762237_6770305885131593310_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=kwxINmcn_RsQ7kNvwEK5eCj&_nc_oc=AdmfGyfkwpGj4tfd_vrBnb1BASy0k6F2POVl8VkAsIHN-hq8LGwO2KNqX4MjTu7eL6M&_nc_zt=24&_nc_ht=scontent.fcai19-8.fna&_nc_gid=nzFotn3pf3g9IYioTSbT_Q&oh=00_Afh0XeKzEmcq8cy4zc4iIrIDxVtbKu5kbajoCp5kghiP2A&oe=692FBCE9'
};

const dummyStories = [
  { id: 1, name: 'Emily Johnson', avatar: 'https://ui-avatars.com/api/?name=Emily+Johnson&background=e91e63&color=fff' },
  { id: 2, name: 'Michael Brown', avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=9c27b0&color=fff' },
  { id: 3, name: 'Sarah Davis', avatar: 'https://ui-avatars.com/api/?name=Sarah+Davis&background=3f51b5&color=fff' },
  { id: 4, name: 'David Wilson', avatar: 'https://ui-avatars.com/api/?name=David+Wilson&background=ff9800&color=fff' },
  { id: 5, name: 'Jessica Martinez', avatar: 'https://ui-avatars.com/api/?name=Jessica+Martinez&background=4caf50&color=fff' },
  { id: 6, name: 'Robert Taylor', avatar: 'https://ui-avatars.com/api/?name=Robert+Taylor&background=f44336&color=fff' }
];

const dummyPosts = [
  {
    id: 1,
    author: 'Tech News Daily',
    avatar: 'https://ui-avatars.com/api/?name=Tech+News&background=2196f3&color=fff',
    time: '2h',
    content: 'Breaking: New AI technology revolutionizes the way we work! Scientists have developed a groundbreaking algorithm that can predict market trends with 95% accuracy. This could change everything we know about data analysis.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    likes: 234,
    comments: 45,
    shares: 12
  },
  {
    id: 2,
    author: 'Travel Adventures',
    avatar: 'https://ui-avatars.com/api/?name=Travel&background=ff5722&color=fff',
    time: '4h',
    content: 'Just got back from an amazing trip to Bali! The sunsets there are absolutely breathtaking. If you are looking for your next vacation destination, this is it! 🌅✈️',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop',
    likes: 567,
    comments: 89,
    shares: 34
  },
  {
    id: 3,
    author: 'Fitness Motivation Hub',
    avatar: 'https://ui-avatars.com/api/?name=Fitness&background=4caf50&color=fff',
    time: '6h',
    content: 'Remember: Progress is progress, no matter how small! Celebrate every milestone on your fitness journey. You got this! 💪',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    likes: 892,
    comments: 156,
    shares: 67
  },
  {
    id: 4,
    author: 'Food Lovers Community',
    avatar: 'https://ui-avatars.com/api/?name=Food&background=ff9800&color=fff',
    time: '8h',
    content: 'Who else loves homemade pizza? 🍕 Just tried this new recipe with fresh mozzarella and basil. Absolutely delicious! Drop your favorite pizza toppings in the comments!',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    likes: 1205,
    comments: 203,
    shares: 45
  },
  {
    id: 5,
    author: 'Photography World',
    avatar: 'https://ui-avatars.com/api/?name=Photography&background=9c27b0&color=fff',
    time: '10h',
    content: 'Golden hour magic ✨ Captured this stunning moment during sunset. Nature never fails to amaze me!',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    likes: 678,
    comments: 92,
    shares: 28
  }
];

const dummyFriendRequests = [
  { id: 1, name: 'Alex Thompson', mutualFriends: 23, avatar: 'https://ui-avatars.com/api/?name=Alex+Thompson&background=4a90e2&color=fff' },
  { id: 2, name: 'Maria Garcia', mutualFriends: 17, avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=e91e63&color=fff' },
  { id: 3, name: 'Chris Anderson', mutualFriends: 41, avatar: 'https://ui-avatars.com/api/?name=Chris+Anderson&background=9c27b0&color=fff' }
];

const dummyNotifications = [
  { id: 1, user: 'Emily Johnson', action: 'liked your post', time: '5m', avatar: 'https://ui-avatars.com/api/?name=Emily+Johnson&background=e91e63&color=fff' },
  { id: 2, user: 'Michael Brown', action: 'commented on your photo', time: '1h', avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=9c27b0&color=fff' },
  { id: 3, user: 'Sarah Davis', action: 'shared your post', time: '3h', avatar: 'https://ui-avatars.com/api/?name=Sarah+Davis&background=3f51b5&color=fff' }
];

const dummyBirthdays = [
  { name: 'Emma Williams', avatar: 'https://ui-avatars.com/api/?name=Emma+Williams&background=ff5722&color=fff' },
  { name: 'James Miller', avatar: 'https://ui-avatars.com/api/?name=James+Miller&background=4caf50&color=fff' },
  { name: 'Olivia Jones', avatar: 'https://ui-avatars.com/api/?name=Olivia+Jones&background=ff9800&color=fff' }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [posts, setPosts] = useState(dummyPosts);
  const [friendRequests, setFriendRequests] = useState(dummyFriendRequests);
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [postText, setPostText] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: post.comments + 1 } : post
    ));
  };

  const handleShare = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, shares: post.shares + 1 } : post
    ));
  };

  const handleCreatePost = () => {
    if (postText.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: dummyUser.name,
        avatar: dummyUser.avatar,
        time: 'Just now',
        content: postText,
        likes: 0,
        comments: 0,
        shares: 0
      };
      setPosts([newPost, ...posts]);
      setPostText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCreatePost();
    }
  };

  const handleConfirmRequest = (id) => {
    setFriendRequests(friendRequests.filter(req => req.id !== id));
  };

  const handleDeleteRequest = (id) => {
    setFriendRequests(friendRequests.filter(req => req.id !== id));
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">f</div>
          <div className="search-bar">
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="header-center">
          <button className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>🏠</button>
          <button onClick={() => setActiveSection('watch')}>📺</button>
          <button onClick={() => setActiveSection('marketplace')}>🏪</button>
          <button onClick={() => setActiveSection('groups')}>👥</button>
          <button onClick={() => setActiveSection('gaming')}>🎮</button>
        </div>
        <div className="header-right">
          <button>☰</button>
          <button>💬</button>
          <button className="notification-btn" onClick={() => setShowNotifications(!showNotifications)}>
            🔔
            <span className="badge">{notifications.length}</span>
          </button>
          <img src={dummyUser.avatar} alt="Profile" className="profile-pic" onClick={() => setActiveSection('profile')} />
        </div>
      </header>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="notifications-dropdown">
          <h3>Notifications</h3>
          {notifications.map(notification => (
            <div key={notification.id} className="notification-item">
              <img src={notification.avatar} alt="" />
              <div>
                <p><strong>{notification.user}</strong> {notification.action}</p>
                <span>{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-item" onClick={() => setActiveSection('profile')}>
            <img src={dummyUser.avatar} alt="" />
            <span>{dummyUser.name}</span>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('friends')}>
            <span className="icon">👥</span>
            <span>Friends</span>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('saved')}>
            <span className="icon">🔖</span>
            <span>Saved</span>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('memories')}>
            <span className="icon">🕐</span>
            <span>Memories</span>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('groups')}>
            <span className="icon">👥</span>
            <span>Groups</span>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('reels')}>
            <span className="icon">▶️</span>
            <span>Reels</span>
          </div>
          <div className="sidebar-item" onClick={() => setActiveSection('marketplace')}>
            <span className="icon">🏪</span>
            <span>Marketplace</span>
          </div>
          <button className="see-more">See more</button>
          
          <div className="shortcuts">
            <h3>Your shortcuts</h3>
            <div className="sidebar-item">
              <span className="icon">🎮</span>
              <span>Gaming Community</span>
            </div>
            <div className="sidebar-item">
              <span className="icon">📚</span>
              <span>Book Club</span>
            </div>
            <div className="sidebar-item">
              <span className="icon">🎵</span>
              <span>Music Lovers</span>
            </div>
          </div>
        </aside>

        {/* Main Feed */}
        <main className="feed">
          {/* Stories */}
          <div className="stories">
            <div className="story create-story">
              <div className="story-create">➕</div>
              <span>Create story</span>
            </div>
            {dummyStories.map(story => (
              <div key={story.id} className="story">
                <img src={story.avatar} alt={story.name} />
                <span>{story.name}</span>
              </div>
            ))}
          </div>

          {/* Create Post */}
          <div className="create-post">
            <div className="create-post-header">
              <img src={dummyUser.avatar} alt="" />
              <input 
                type="text" 
                placeholder={`What's on your mind, ${dummyUser.name.split(' ')[0]}?`}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="create-post-actions">
              <button onClick={handleCreatePost}>🎥 Live video</button>
              <button onClick={handleCreatePost}>🖼️ Photo/video</button>
              <button onClick={handleCreatePost}>😊 Feeling/activity</button>
            </div>
          </div>

          {/* Posts */}
          {posts.map(post => (
            <div key={post.id} className="post">
              <div className="post-header">
                <img src={post.avatar} alt="" />
                <div>
                  <h4>{post.author}</h4>
                  <span>{post.time} · 🌐</span>
                </div>
                <button className="post-menu">⋯</button>
              </div>
              <p className="post-content">{post.content}</p>
              {post.image && <img src={post.image} alt="" className="post-image" />}
              <div className="post-stats">
                <span>👍 {post.likes}</span>
                <span>{post.comments} comments · {post.shares} shares</span>
              </div>
              <div className="post-actions">
                <button onClick={() => handleLike(post.id)}>👍 Like</button>
                <button onClick={() => handleComment(post.id)}>💬 Comment</button>
                <button onClick={() => handleShare(post.id)}>↗️ Share</button>
              </div>
            </div>
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="sponsored">
            <h3>Sponsored</h3>
            <div className="ad-item">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop" alt="" />
              <div>
                <p>Premium Watches</p>
                <span>luxurywatches.com</span>
              </div>
            </div>
            <div className="ad-item">
              <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=150&h=150&fit=crop" alt="" />
              <div>
                <p>Fitness Pro</p>
                <span>fitnesspro.com</span>
              </div>
            </div>
          </div>

          <div className="friend-requests">
            <div className="section-header">
              <h3>Friend requests</h3>
              <button onClick={() => setActiveSection('friends')}>See all</button>
            </div>
            {friendRequests.map(request => (
              <div key={request.id} className="friend-request">
                <img src={request.avatar} alt="" />
                <div className="request-info">
                  <h4>{request.name}</h4>
                  <span>👥 {request.mutualFriends} mutual friends</span>
                  <div className="request-actions">
                    <button className="confirm-btn" onClick={() => handleConfirmRequest(request.id)}>Confirm</button>
                    <button className="delete-btn" onClick={() => handleDeleteRequest(request.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="birthdays">
            <h3>Birthdays</h3>
            {dummyBirthdays.map((person, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <img src={person.avatar} alt="" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                <p>🎂 <strong>{person.name}</strong> has a birthday today</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;