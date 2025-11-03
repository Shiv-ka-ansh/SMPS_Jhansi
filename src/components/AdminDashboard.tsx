import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  Shield, 
  FileText, 
  Image as ImageIcon, 
  Plus, 
  Edit, 
  Trash2, 
  Upload,
  LogOut,
  Home,
  Mail,
  MessageSquare,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

interface AdminDashboardProps {
  accessToken: string;
  onLogout: () => void;
  onNavigateHome: () => void;
}

interface Notice {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt?: string;
}

interface GalleryImage {
  id: string;
  filename: string;
  title: string;
  category: string;
  originalName: string;
  size: number;
  type: string;
  createdAt: string;
  url?: string;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  submittedAt: string;
  status: 'new' | 'in-progress' | 'resolved' | 'closed';
  updatedAt?: string;
  updatedBy?: string;
}

export function AdminDashboard({ accessToken, onLogout, onNavigateHome }: AdminDashboardProps) {
  // Initialize with sample data
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: '1',
      title: 'Admission Open for Class 10th',
      content: 'Admission for new students in Class 10th is now open. Please visit the school office with all required documents.',
      category: 'academic',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Annual Sports Day',
      content: 'The annual sports day will be held on 25th December. All students are required to participate.',
      category: 'event',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: '3',
      title: 'Winter Vacation Notice',
      content: 'School will remain closed from 20th December to 5th January for winter vacation.',
      category: 'holiday',
      createdAt: new Date(Date.now() - 172800000).toISOString(),
    }
  ]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    {
      id: '1',
      filename: 'school-building.jpg',
      title: 'School Main Building',
      category: 'infrastructure',
      originalName: 'school-building.jpg',
      size: 1024000,
      type: 'image/jpeg',
      createdAt: new Date().toISOString(),
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400'
    },
    {
      id: '2',
      filename: 'sports-day.jpg',
      title: 'Sports Day Event',
      category: 'events',
      originalName: 'sports-day.jpg',
      size: 856000,
      type: 'image/jpeg',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
    }
  ]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([
    {
      id: '1',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 9876543210',
      subject: 'Admission Inquiry',
      message: 'I would like to inquire about admission process for my child.',
      submittedAt: new Date().toISOString(),
      status: 'new'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 9876543211',
      subject: 'Fee Structure',
      message: 'Could you please provide details about the fee structure?',
      submittedAt: new Date(Date.now() - 86400000).toISOString(),
      status: 'in-progress'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [stats, setStats] = useState({
    totalNotices: 0,
    totalImages: 0,
    totalContacts: 0,
    newContacts: 0
  });

  // Notice form state
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    content: '',
    category: 'general',
  });
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [showNoticeDialog, setShowNoticeDialog] = useState(false);

  // Gallery form state
  const [uploadForm, setUploadForm] = useState({
    title: '',
    category: 'general',
    file: null as File | null,
  });
  const [showUploadDialog, setShowUploadDialog] = useState(false);

  useEffect(() => {
    // Initialize stats with current data
    updateStats();
  }, []);

  // Helper function to generate unique IDs
  const generateId = () => Math.random().toString(36).substr(2, 9);

  const showMessage = (message: string, isError = false) => {
    if (isError) {
      setError(message);
      setSuccess('');
      console.error('Admin Dashboard Error:', message);
    } else {
      setSuccess(message);
      setError('');
      console.log('Admin Dashboard Success:', message);
    }
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  };

  // Notice management functions

  const handleNoticeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (editingNotice) {
        // Update existing notice
        setNotices(prev => prev.map(notice => 
          notice.id === editingNotice.id 
            ? { ...notice, ...noticeForm, updatedAt: new Date().toISOString() }
            : notice
        ));
        showMessage('Notice updated successfully!');
      } else {
        // Create new notice
        const newNotice: Notice = {
          id: generateId(),
          title: noticeForm.title,
          content: noticeForm.content,
          category: noticeForm.category,
          createdAt: new Date().toISOString(),
        };
        setNotices(prev => [newNotice, ...prev]);
        showMessage('Notice created successfully!');
      }
      
      resetNoticeForm();
      setShowNoticeDialog(false);
    } catch (error) {
      showMessage('An error occurred while saving notice', true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteNotice = async (noticeId: string) => {
    if (!confirm('Are you sure you want to delete this notice?')) return;

    setIsLoading(true);
    try {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setNotices(prev => prev.filter(notice => notice.id !== noticeId));
      showMessage('Notice deleted successfully!');
    } catch (error) {
      showMessage('An error occurred while deleting notice', true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetNoticeForm = () => {
    setNoticeForm({ title: '', content: '', category: 'general' });
    setEditingNotice(null);
  };

  const startEditNotice = (notice: Notice) => {
    setEditingNotice(notice);
    setNoticeForm({
      title: notice.title,
      content: notice.content,
      category: notice.category,
    });
    setShowNoticeDialog(true);
  };

  // Gallery management functions

  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadForm.file) {
      showMessage('Please select a file to upload', true);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate upload time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create object URL for the uploaded file
      const imageUrl = URL.createObjectURL(uploadForm.file);
      
      const newImage: GalleryImage = {
        id: generateId(),
        filename: uploadForm.file.name,
        title: uploadForm.title,
        category: uploadForm.category,
        originalName: uploadForm.file.name,
        size: uploadForm.file.size,
        type: uploadForm.file.type,
        createdAt: new Date().toISOString(),
        url: imageUrl
      };
      
      setGalleryImages(prev => [newImage, ...prev]);
      showMessage('Image uploaded successfully!');
      resetUploadForm();
      setShowUploadDialog(false);
    } catch (error) {
      showMessage('An error occurred while uploading image', true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    setIsLoading(true);
    try {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Clean up object URL if it exists
      const imageToDelete = galleryImages.find(img => img.id === imageId);
      if (imageToDelete?.url && imageToDelete.url.startsWith('blob:')) {
        URL.revokeObjectURL(imageToDelete.url);
      }
      
      setGalleryImages(prev => prev.filter(image => image.id !== imageId));
      showMessage('Image deleted successfully!');
    } catch (error) {
      showMessage('An error occurred while deleting image', true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetUploadForm = () => {
    setUploadForm({ title: '', category: 'general', file: null });
  };

  // Contact submissions management functions

  const handleUpdateContactStatus = async (contactId: string, newStatus: string) => {
    setIsLoading(true);
    try {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setContactSubmissions(prev => prev.map(contact => 
        contact.id === contactId 
          ? { ...contact, status: newStatus as ContactSubmission['status'], updatedAt: new Date().toISOString() }
          : contact
      ));
      showMessage('Contact status updated successfully!');
    } catch (error) {
      showMessage('An error occurred while updating contact status', true);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Mail className="h-4 w-4 text-blue-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'closed':
        return <XCircle className="h-4 w-4 text-gray-500" />;
      default:
        return <Mail className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const updateStats = () => {
    const newContacts = contactSubmissions.filter(c => c.status === 'new').length;
    setStats({
      totalNotices: notices.length,
      totalImages: galleryImages.length,
      totalContacts: contactSubmissions.length,
      newContacts
    });
  };

  // Update stats when data changes
  useEffect(() => {
    updateStats();
  }, [notices, galleryImages, contactSubmissions]);



  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your school website content</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={onNavigateHome}
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>View Website</span>
              </Button>
              <Button
                variant="outline"
                onClick={onLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">{error}</AlertDescription>
          </Alert>
        )}
        
        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <AlertDescription className="text-green-700">{success}</AlertDescription>
          </Alert>
        )}

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.totalNotices}</p>
                <p className="text-sm text-gray-600">Total Notices</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.totalImages}</p>
                <p className="text-sm text-gray-600">Gallery Images</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
                <p className="text-sm text-gray-600">Total Queries</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.newContacts}</p>
                <p className="text-sm text-gray-600">New Queries</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="notices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notices" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Notices</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4" />
              <span>Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="queries" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Queries</span>
            </TabsTrigger>
          </TabsList>

          {/* Notices Tab */}
          <TabsContent value="notices" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Notice Board Management</h2>
              <Dialog open={showNoticeDialog} onOpenChange={setShowNoticeDialog}>
                <DialogTrigger asChild>
                  <Button onClick={() => resetNoticeForm()}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Notice
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingNotice ? 'Edit Notice' : 'Add New Notice'}
                    </DialogTitle>
                    <DialogDescription>
                      {editingNotice ? 'Update the notice details below.' : 'Create a new notice for the notice board.'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleNoticeSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={noticeForm.title}
                        onChange={(e) => setNoticeForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter notice title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={noticeForm.category} onValueChange={(value) => setNoticeForm(prev => ({ ...prev, category: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="academic">Academic</SelectItem>
                          <SelectItem value="event">Event</SelectItem>
                          <SelectItem value="holiday">Holiday</SelectItem>
                          <SelectItem value="exam">Exam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={noticeForm.content}
                        onChange={(e) => setNoticeForm(prev => ({ ...prev, content: e.target.value }))}
                        placeholder="Enter notice content"
                        rows={4}
                        required
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Saving...' : (editingNotice ? 'Update Notice' : 'Create Notice')}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowNoticeDialog(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Notices List */}
            <div className="grid gap-4">
              {notices.length === 0 ? (
                <Card className="p-6 text-center">
                  <p className="text-gray-500">No notices found. Create your first notice!</p>
                </Card>
              ) : (
                notices.map((notice) => (
                  <Card key={notice.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{notice.title}</h3>
                          <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
                            {notice.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{notice.content}</p>
                        <p className="text-xs text-gray-400">
                          Created: {new Date(notice.createdAt).toLocaleDateString()}
                          {notice.updatedAt && (
                            <span> • Updated: {new Date(notice.updatedAt).toLocaleDateString()}</span>
                          )}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => startEditNotice(notice)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteNotice(notice.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gallery Management</h2>
              <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
                <DialogTrigger asChild>
                  <Button onClick={() => resetUploadForm()}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Image
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload New Image</DialogTitle>
                    <DialogDescription>
                      Add a new image to the gallery.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleImageUpload} className="space-y-4">
                    <div>
                      <Label htmlFor="file">Image File</Label>
                      <Input
                        id="file"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          setUploadForm(prev => ({ ...prev, file }));
                        }}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="imageTitle">Title</Label>
                      <Input
                        id="imageTitle"
                        value={uploadForm.title}
                        onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter image title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="imageCategory">Category</Label>
                      <Select value={uploadForm.category} onValueChange={(value) => setUploadForm(prev => ({ ...prev, category: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="events">Events</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="academics">Academics</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex space-x-2">
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Uploading...' : 'Upload Image'}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowUploadDialog(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {galleryImages.length === 0 ? (
                <div className="col-span-full">
                  <Card className="p-6 text-center">
                    <p className="text-gray-500">No images found. Upload your first image!</p>
                  </Card>
                </div>
              ) : (
                galleryImages.map((image) => (
                  <Card key={image.id} className="p-4">
                    <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                      {image.url ? (
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium truncate mb-1">{image.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span className="px-2 py-1 rounded bg-gray-100">{image.category}</span>
                        <span>{(image.size / 1024).toFixed(1)}KB</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">
                        {new Date(image.createdAt).toLocaleDateString()}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteImage(image.id)}
                        className="w-full"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Contact Queries Tab */}
          <TabsContent value="queries" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Application Queries & Contact Submissions</h2>
              <Button 
                onClick={() => {
                  showMessage('Contact submissions refreshed!');
                }} 
                variant="outline"
                disabled={isLoading}
              >
                <Mail className="h-4 w-4 mr-2" />
                {isLoading ? 'Loading...' : 'Refresh'}
              </Button>
            </div>

            {/* Contact Submissions List */}
            <div className="grid gap-4">
              {contactSubmissions.length === 0 ? (
                <Card className="p-6 text-center">
                  <p className="text-gray-500">No contact submissions found.</p>
                </Card>
              ) : (
                contactSubmissions.map((contact) => (
                  <Card key={contact.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{contact.subject}</h3>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(contact.status)}
                            <span className={`px-2 py-1 text-xs rounded ${getStatusColor(contact.status)}`}>
                              {contact.status.charAt(0).toUpperCase() + contact.status.slice(1).replace('-', ' ')}
                            </span>
                          </div>
                        </div>
                        <div className="mb-2">
                          <p className="text-sm"><strong>Name:</strong> {contact.name}</p>
                          <p className="text-sm"><strong>Email:</strong> {contact.email}</p>
                          {contact.phone && (
                            <p className="text-sm"><strong>Phone:</strong> {contact.phone}</p>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{contact.message}</p>
                        <p className="text-xs text-gray-400">
                          Submitted: {new Date(contact.submittedAt).toLocaleDateString()} at {new Date(contact.submittedAt).toLocaleTimeString()}
                          {contact.updatedAt && (
                            <span> • Updated: {new Date(contact.updatedAt).toLocaleDateString()}</span>
                          )}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Select 
                          value={contact.status} 
                          onValueChange={(value) => handleUpdateContactStatus(contact.id, value)}
                          disabled={isLoading}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}