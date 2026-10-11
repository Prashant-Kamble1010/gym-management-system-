import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DumbbellIcon,
  ClockIcon,
  CheckCircleIcon,
  LogOutIcon,
  UserIcon,
  CalendarIcon
} from "../component/Icons";
import Toast from "../component/Toast";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("member@gymfit.com");
  const [toast, setToast] = useState(null);
  const [checkedIn, setCheckedIn] = useState(false);

  // Simple class bookings
  const [bookedClasses, setBookedClasses] = useState([1]);

  useEffect(() => {
    const saved = localStorage.getItem("userEmail");
    if (saved) {
      setUserEmail(saved);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const handleCheckIn = () => {
    setCheckedIn(true);
    setToast({
      type: "success",
      message: "Check-in confirmed! Welcome to GymFit today."
    });
  };

  const toggleBooking = (id, name) => {
    if (bookedClasses.includes(id)) {
      setBookedClasses(bookedClasses.filter((c) => c !== id));
      setToast({ type: "info", message: `Cancelled booking for ${name}.` });
    } else {
      setBookedClasses([...bookedClasses, id]);
      setToast({ type: "success", message: `Slot booked for ${name}!` });
    }
  };

  const classes = [
    { id: 1, name: "Morning Strength & Weights", time: "07:00 AM", trainer: "Rahul Sharma", day: "Monday & Wednesday" },
    { id: 2, name: "HIIT & Cardio Burn", time: "06:00 PM", trainer: "Pooja Deshmukh", day: "Tuesday & Thursday" },
    { id: 3, name: "Core & Yoga Mobility", time: "07:30 AM", trainer: "Ananya Kulkarni", day: "Friday & Saturday" },
    { id: 4, name: "Boxing Conditioning", time: "07:00 PM", trainer: "Vikram Roy", day: "Saturday" },
  ];

  const username = userEmail.includes("@") ? userEmail.split("@")[0] : userEmail;

  return (
    <main className="dashboard-page">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="dashboard-container">
        {/* Header Bar */}
        <header className="dashboard-topbar">
          <div className="topbar-user">
            <div className="user-icon-circle">
              <UserIcon size={22} />
            </div>
            <div>
              <h2>Welcome back, <span className="text-orange">{username}</span></h2>
              <p>Active Gym Member • Pune Branch</p>
            </div>
          </div>

          <div className="topbar-actions">
            <button
              className={`checkin-btn ${checkedIn ? "is-checked" : ""}`}
              onClick={handleCheckIn}
              disabled={checkedIn}
            >
              <CheckCircleIcon size={16} />
              <span>{checkedIn ? "Checked In Today" : "Check In Now"}</span>
            </button>

            <button className="logout-btn" onClick={handleLogout}>
              <LogOutIcon size={16} />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* 3 Simple Summary Cards */}
        <section className="dashboard-stats-row">
          <div className="dash-stat-card">
            <span className="stat-card-title">MEMBERSHIP PLAN</span>
            <div className="stat-card-val">3 Months Plan</div>
            <span className="stat-card-sub text-green">● Status: Active (Expires in 42 days)</span>
          </div>

          <div className="dash-stat-card">
            <span className="stat-card-title">ATTENDANCE THIS MONTH</span>
            <div className="stat-card-val">16 Days</div>
            <span className="stat-card-sub">Great consistency! Keep going.</span>
          </div>

          <div className="dash-stat-card">
            <span className="stat-card-title">TODAY'S GYM HOURS</span>
            <div className="stat-card-val">5:00 AM - 11:00 PM</div>
            <span className="stat-card-sub">Locker Room & Showers Available</span>
          </div>
        </section>

        {/* Content Layout */}
        <div className="dashboard-grid">
          {/* Left: Class Schedule */}
          <div className="dash-box">
            <div className="dash-box-header">
              <div className="box-title-wrap">
                <CalendarIcon size={20} className="text-orange" />
                <h3>Weekly Fitness Classes</h3>
              </div>
              <span className="box-hint">Book or cancel anytime</span>
            </div>

            <div className="classes-table-wrapper">
              <table className="classes-simple-table">
                <thead>
                  <tr>
                    <th>Class Name</th>
                    <th>Time & Day</th>
                    <th>Trainer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((cls) => {
                    const isBooked = bookedClasses.includes(cls.id);
                    return (
                      <tr key={cls.id}>
                        <td><strong>{cls.name}</strong></td>
                        <td>
                          <div>{cls.time}</div>
                          <small className="text-muted">{cls.day}</small>
                        </td>
                        <td>{cls.trainer}</td>
                        <td>
                          <button
                            className={`book-slot-btn ${isBooked ? "booked" : ""}`}
                            onClick={() => toggleBooking(cls.id, cls.name)}
                          >
                            {isBooked ? "Booked ✓" : "Book Spot"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Member Info & Notice */}
          <div className="dash-sidebar-col">
            <div className="dash-box">
              <div className="dash-box-header">
                <h3>Member Profile</h3>
              </div>
              <div className="member-details-list">
                <div className="detail-row">
                  <span>Email:</span>
                  <strong>{userEmail}</strong>
                </div>
                <div className="detail-row">
                  <span>Member ID:</span>
                  <strong>#GF-4208</strong>
                </div>
                <div className="detail-row">
                  <span>Locker Number:</span>
                  <strong>Locker #24</strong>
                </div>
                <div className="detail-row">
                  <span>Emergency Help:</span>
                  <strong>+91 9860883426</strong>
                </div>
              </div>
            </div>

            <div className="dash-box notice-box">
              <div className="dash-box-header">
                <h3>Notice Board</h3>
              </div>
              <p>
                Sunday morning recovery and mobility batch runs from 7:00 AM to 9:00 AM. Steam and sauna facilities operate all week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;