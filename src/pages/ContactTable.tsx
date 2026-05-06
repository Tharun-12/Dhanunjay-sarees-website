import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import { toast } from "sonner";
import { 
  Mail, 
  Phone, 
  User, 
  Calendar, 
  Trash2, 
  RefreshCw, 
  Download,
  Eye,
  Clock,
  AlertCircle,
  MessageSquare,
  Search,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  updated_at?: string;
}

const ContactTable = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const recordsPerPage = 10;

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BASE_URL}/api/contact/get-all`);
      
      let contactsData = [];
      if (res.data.success && Array.isArray(res.data.data)) {
        contactsData = res.data.data;
      } else if (Array.isArray(res.data)) {
        contactsData = res.data;
      } else if (res.data.data && Array.isArray(res.data.data)) {
        contactsData = res.data.data;
      } else {
        contactsData = [];
      }
      
      const sortedData = contactsData.sort((a, b) => {
        if (b.created_at && a.created_at) {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        return b.id - a.id;
      });
      
      setContacts(sortedData);
      toast.success(`✨ Loaded ${sortedData.length} enquiries`);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to load contact requests. Please try again.");
      toast.error("Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(search.toLowerCase()) ||
    contact.email?.toLowerCase().includes(search.toLowerCase()) ||
    contact.phone?.includes(search) ||
    contact.message?.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRecords = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / recordsPerPage);

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return `Today at ${date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`;
    } else if (diffDays === 1) {
      return `Yesterday at ${date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`;
    } else {
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const getRelativeTime = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this enquiry? This action cannot be undone.")) {
      setDeletingId(id);
      try {
        await axios.delete(`${BASE_URL}/api/contact/delete/${id}`);
        toast.success("Enquiry deleted successfully");
        fetchContacts();
      } catch (err) {
        console.error("Error deleting contact:", err);
        toast.error("Failed to delete enquiry. Please try again.");
      } finally {
        setDeletingId(null);
      }
    }
  };

  const viewDetails = (contact: Contact) => {
    setSelectedContact(contact);
    setShowDetailsModal(true);
  };

  const exportToCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Message", "Date"];
    const csvData = filteredContacts.map(contact => [
      contact.id,
      contact.name,
      contact.email,
      contact.phone,
      `"${contact.message.replace(/"/g, '""')}"`,
      formatDate(contact.created_at)
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enquiries_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully");
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  const getStats = () => {
    const now = new Date();
    const thisMonth = contacts.filter(c => {
      const date = new Date(c.created_at);
      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    }).length;
    
    const thisWeek = contacts.filter(c => {
      const date = new Date(c.created_at);
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - now.getDay());
      return date >= weekStart;
    }).length;
    
    const today = contacts.filter(c => {
      const date = new Date(c.created_at);
      return date.toDateString() === now.toDateString();
    }).length;
    
    return { total: contacts.length, thisMonth, thisWeek, today };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <AdminNavbar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        {/* Header Section with Saree Theme */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-600 via-red-600 to-pink-600 rounded-full"></div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-700 via-red-700 to-pink-700 bg-clip-text text-transparent">
                Customer Enquiries
              </h1>
              <span className="text-2xl">🪔</span>
            </div>
            <p className="text-orange-600 mt-1">Manage and respond to wholesale saree enquiries</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={exportToCSV}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button
              onClick={fetchContacts}
              className="px-4 py-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg hover:from-orange-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Stats Cards with Saree Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Enquiries</p>
                  <p className="text-3xl font-bold mt-1">{stats.total}</p>
                </div>
                <MessageSquare className="w-10 h-10 opacity-80" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl p-5 text-white shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">This Month</p>
                  <p className="text-3xl font-bold mt-1">{stats.thisMonth}</p>
                </div>
                <TrendingUp className="w-10 h-10 opacity-80" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-5 text-white shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">This Week</p>
                  <p className="text-3xl font-bold mt-1">{stats.thisWeek}</p>
                </div>
                <Calendar className="w-10 h-10 opacity-80" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-5 text-white shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Today</p>
                  <p className="text-3xl font-bold mt-1">{stats.today}</p>
                </div>
                <Users className="w-10 h-10 opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-orange-400" />
            <input
              type="text"
              placeholder="🔍 Search by name, email, phone, or message..."
              className="w-full px-4 py-3 pl-10 border-2 border-orange-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-6 w-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-3" />
            <p className="text-red-600 text-lg font-medium">{error}</p>
            <button
              onClick={fetchContacts}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border-2 border-orange-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
                    <tr>
                      <th className="p-4 text-sm font-semibold">#</th>
                      <th className="p-4 text-sm font-semibold">Customer</th>
                      <th className="p-4 text-sm font-semibold">Email</th>
                      <th className="p-4 text-sm font-semibold">Phone</th>
                      <th className="p-4 text-sm font-semibold">Enquiry</th>
                      <th className="p-4 text-sm font-semibold">Received</th>
                      <th className="p-4 text-sm font-semibold text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRecords.length > 0 ? (
                      currentRecords.map((contact, index) => (
                        <tr
                          key={contact.id}
                          className="border-b border-orange-100 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300 group"
                        >
                          <td className="p-4 text-sm text-orange-500 font-medium">
                            {indexOfFirst + index + 1}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 flex items-center justify-center">
                                <User className="w-4 h-4 text-orange-600" />
                              </div>
                              <span className="font-semibold text-gray-800">{contact.name}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => copyToClipboard(contact.email, "Email")}
                              className="text-orange-600 hover:text-pink-600 hover:underline flex items-center gap-1 transition-colors"
                            >
                              <Mail className="w-3 h-3" />
                              {contact.email}
                            </button>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => copyToClipboard(contact.phone, "Phone number")}
                              className="text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1 transition-colors"
                            >
                              <Phone className="w-3 h-3" />
                              {contact.phone}
                            </button>
                          </td>
                          <td className="p-4 max-w-xs">
                            <p className="text-gray-600 truncate" title={contact.message}>
                              {contact.message.length > 50 ? contact.message.substring(0, 50) + "..." : contact.message}
                            </p>
                          </td>
                          <td className="p-4">
                            <div className="text-xs">
                              <div className="text-gray-600">{formatDate(contact.created_at)}</div>
                              <div className="text-orange-500 text-xs mt-1 font-medium">{getRelativeTime(contact.created_at)}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => viewDetails(contact)}
                                className="p-2 text-orange-500 hover:text-pink-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                title="View Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(contact.id)}
                                disabled={deletingId === contact.id}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 disabled:opacity-50"
                                title="Delete"
                              >
                                {deletingId === contact.id ? (
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                                ) : (
                                  <Trash2 className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="text-center py-16">
                          <div className="text-gray-400">
                            <div className="text-6xl mb-4">🪔</div>
                            <p className="text-lg font-medium">No enquiries found</p>
                            <p className="text-sm mt-1">Try adjusting your search or check back later.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 hover:from-orange-200 hover:to-pink-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  ← Previous
                </button>
                
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                            currentPage === pageNum
                              ? "bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white shadow-md"
                              : "bg-white border-2 border-orange-200 text-orange-700 hover:bg-orange-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                      return <span key={i} className="px-2 py-2 text-orange-400">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 hover:from-orange-200 hover:to-pink-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next →
                </button>
              </div>
            )}

            {/* Results Info */}
            <div className="text-center mt-4 text-sm text-orange-600">
              Showing {filteredContacts.length > 0 ? indexOfFirst + 1 : 0} to {Math.min(indexOfLast, filteredContacts.length)} of {filteredContacts.length} entries
            </div>
          </>
        )}
      </div>

      {/* Details Modal with Saree Theme */}
      {showDetailsModal && selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowDetailsModal(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🪔</span>
                  <h2 className="text-2xl font-bold">Enquiry Details</h2>
                </div>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-white hover:text-gray-200 transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              <p className="text-white/90 mt-1">ID: #{selectedContact.id}</p>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                  <div className="flex items-center gap-2 text-orange-600 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Customer Name</span>
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{selectedContact.name}</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                  <div className="flex items-center gap-2 text-pink-600 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Email Address</span>
                  </div>
                  <a href={`mailto:${selectedContact.email}`} className="text-orange-600 hover:text-pink-600 hover:underline">
                    {selectedContact.email}
                  </a>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                  <div className="flex items-center gap-2 text-emerald-600 mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Phone Number</span>
                  </div>
                  <a href={`tel:${selectedContact.phone}`} className="text-emerald-600 hover:text-emerald-700 hover:underline">
                    {selectedContact.phone}
                  </a>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Received On</span>
                  </div>
                  <p className="text-gray-800 font-medium">{new Date(selectedContact.created_at).toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Enquiry Message</span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{selectedContact.message}</p>
              </div>
              
              <div className="flex gap-3 pt-4">
                <a
                  href={`mailto:${selectedContact.email}?subject=Response to your saree enquiry - Pragati Sarees&body=Dear ${selectedContact.name},%0D%0A%0D%0AThank you for your interest in Pragati Sarees. We have received your enquiry and our team will get back to you shortly with the best wholesale saree options.%0D%0A%0D%0AFor immediate assistance, please feel free to call us at +91 9328015392 or +91 6355459390.%0D%0A%0D%0ABest regards,%0D%0APragati Sarees Team%0D%0A✨ Wholesale Saree Specialists`}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center font-semibold shadow-md"
                >
                  📧 Reply via Email
                </a>
                <a
                  href={`https://wa.me/${selectedContact.phone.replace(/[^0-9]/g, '')}?text=Hello ${selectedContact.name},%0D%0A%0D%0AThank you for your enquiry to Pragati Sarees. We have received your message and will get back to you shortly with wholesale saree details.%0D%0A%0D%0AFor quick assistance, please call: +91 9328015392%0D%0A%0D%0ARegards,%0D%0APragati Sarees Team 🪔`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center font-semibold shadow-md"
                >
                  💬 WhatsApp
                </a>
                <button
                  onClick={() => handleDelete(selectedContact.id)}
                  className="px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-md"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTable;