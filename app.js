// Product Database
const products = [
  { id: 1, name: "Blue Denim Jeans", category: "Fashion", price: 49.99, description: "Classic blue jeans", imageUrl: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop" },
  { id: 2, name: "Black T-Shirt", category: "Fashion", price: 19.99, description: "Solid black t-shirt", imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop" },
  { id: 3, name: "White Sneakers", category: "Fashion", price: 89.99, description: "Classic white sneakers", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop" },
  { id: 4, name: "Red Hoodie", category: "Fashion", price: 59.99, description: "Warm red hoodie", imageUrl: "https://images.unsplash.com/photo-1556821552-5eb066c57e15?w=300&h=300&fit=crop" },
  { id: 5, name: "Summer Dress", category: "Fashion", price: 69.99, description: "Flowy summer dress", imageUrl: "https://images.unsplash.com/photo-1595777712802-13d1d19beb80?w=300&h=300&fit=crop" },
  { id: 6, name: "Wireless Headphones", category: "Electronics", price: 79.99, description: "Bluetooth wireless headphones", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" },
  { id: 7, name: "Smartphone Stand", category: "Electronics", price: 14.99, description: "Adjustable phone stand", imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c3ca4b7f1?w=300&h=300&fit=crop" },
  { id: 8, name: "Laptop Bag", category: "Electronics", price: 49.99, description: "Professional laptop bag", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop" },
  { id: 9, name: "USB-C Cable", category: "Electronics", price: 9.99, description: "High-speed USB-C cable", imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop" },
  { id: 10, name: "Portable Charger", category: "Electronics", price: 34.99, description: "20000mAh power bank", imageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop" },
  { id: 11, name: "Coffee Mug", category: "Home", price: 12.99, description: "Ceramic coffee mug", imageUrl: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=300&h=300&fit=crop" },
  { id: 12, name: "Throw Pillow", category: "Home", price: 24.99, description: "Soft decorative pillow", imageUrl: "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=300&h=300&fit=crop" },
  { id: 13, name: "Wall Clock", category: "Home", price: 34.99, description: "Modern wall clock", imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&h=300&fit=crop" },
  { id: 14, name: "Table Lamp", category: "Home", price: 44.99, description: "LED desk lamp", imageUrl: "https://images.unsplash.com/photo-1565636192335-14c46fa1120f?w=300&h=300&fit=crop" },
  { id: 15, name: "Bedding Set", category: "Home", price: 89.99, description: "Queen size bedding", imageUrl: "https://images.unsplash.com/photo-1540932239986-f858b3fa7141?w=300&h=300&fit=crop" },
  { id: 16, name: "Fiction Novel", category: "Books", price: 14.99, description: "Bestseller fiction book", imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop" },
  { id: 17, name: "Self-Help Book", category: "Books", price: 16.99, description: "Personal development guide", imageUrl: "https://images.unsplash.com/photo-1507842072343-583f20270319?w=300&h=300&fit=crop" },
  { id: 18, name: "Technical Manual", category: "Books", price: 49.99, description: "Programming guide", imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e3ece00?w=300&h=300&fit=crop" },
  { id: 19, name: "Children's Book", category: "Books", price: 9.99, description: "Illustrated kids book", imageUrl: "https://images.unsplash.com/photo-1514306688772-aadda329cc5d?w=300&h=300&fit=crop" },
  { id: 20, name: "Art Book", category: "Books", price: 34.99, description: "Contemporary art collection", imageUrl: "https://images.unsplash.com/photo-1516979187457-635ffe35ff85?w=300&h=300&fit=crop" },
  { id: 21, name: "Running Shoes", category: "Sports", price: 129.99, description: "Professional running shoes", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop" },
  { id: 22, name: "Yoga Mat", category: "Sports", price: 24.99, description: "Premium yoga mat", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop" },
  { id: 23, name: "Dumbbell Set", category: "Sports", price: 79.99, description: "Adjustable dumbbells", imageUrl: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop" },
  { id: 24, name: "Water Bottle", category: "Sports", price: 19.99, description: "Insulated water bottle", imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e9?w=300&h=300&fit=crop" },
  { id: 25, name: "Bicycle Helmet", category: "Sports", price: 59.99, description: "Safety bike helmet", imageUrl: "https://images.unsplash.com/photo-1578496781514-32156ef59f04?w=300&h=300&fit=crop" },
  { id: 26, name: "Face Moisturizer", category: "Beauty", price: 29.99, description: "Hydrating face cream", imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop" },
  { id: 27, name: "Shampoo Bottle", category: "Beauty", price: 12.99, description: "Organic shampoo", imageUrl: "https://images.unsplash.com/photo-1585563047346-8b3a6b7e0c3d?w=300&h=300&fit=crop" },
  { id: 28, name: "Sunscreen SPF 50", category: "Beauty", price: 19.99, description: "UV protection cream", imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop" },
  { id: 29, name: "Makeup Brush Set", category: "Beauty", price: 24.99, description: "Professional brush collection", imageUrl: "https://images.unsplash.com/photo-1585232341710-4b6af60904b9?w=300&h=300&fit=crop" },
  { id: 30, name: "Hair Dryer", category: "Beauty", price: 69.99, description: "Professional hair dryer", imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 31, name: "Board Game", category: "Toys", price: 34.99, description: "Strategy board game", imageUrl: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=300&fit=crop" },
  { id: 32, name: "LEGO Set", category: "Toys", price: 79.99, description: "Building block set", imageUrl: "https://images.unsplash.com/photo-1551250267-94d440642117?w=300&h=300&fit=crop" },
  { id: 33, name: "Action Figure", category: "Toys", price: 24.99, description: "Collectible action figure", imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop" },
  { id: 34, name: "Puzzle", category: "Toys", price: 14.99, description: "1000-piece jigsaw puzzle", imageUrl: "https://images.unsplash.com/photo-1540531741f39db1e5dd90e9b37d96c38e7a12b9?w=300&h=300&fit=crop" },
  { id: 35, name: "Remote Control Car", category: "Toys", price: 49.99, description: "Racing RC car", imageUrl: "https://images.unsplash.com/photo-1594787318286-3d835c1cab83?w=300&h=300&fit=crop" },
  { id: 36, name: "Gold Watch", category: "Jewelry", price: 199.99, description: "Classic gold watch", imageUrl: "https://images.unsplash.com/photo-1523170335684-f042b6f56efc?w=300&h=300&fit=crop" },
  { id: 37, name: "Silver Necklace", category: "Jewelry", price: 79.99, description: "Elegant silver chain", imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 38, name: "Diamond Ring", category: "Jewelry", price: 299.99, description: "Diamond engagement ring", imageUrl: "https://images.unsplash.com/photo-1597865192665-ba8e2f05dc4d?w=300&h=300&fit=crop" },
  { id: 39, name: "Pearl Earrings", category: "Jewelry", price: 89.99, description: "Classic pearl studs", imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 40, name: "Bracelet", category: "Jewelry", price: 49.99, description: "Beaded bracelet", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 41, name: "Dog Collar", category: "Pets", price: 19.99, description: "Adjustable dog collar", imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop" },
  { id: 42, name: "Cat Bed", category: "Pets", price: 34.99, description: "Cozy cat bed", imageUrl: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=300&h=300&fit=crop" },
  { id: 43, name: "Dog Toys Bundle", category: "Pets", price: 24.99, description: "Set of dog toys", imageUrl: "https://images.unsplash.com/photo-1535241750d7f75dc4d426651b92c0fc3b87cf13f?w=300&h=300&fit=crop" },
  { id: 44, name: "Pet Food Bowl", category: "Pets", price: 14.99, description: "Stainless steel bowl", imageUrl: "https://images.unsplash.com/photo-1537151608828-8661a20b6040?w=300&h=300&fit=crop" },
  { id: 45, name: "Bird Cage", category: "Pets", price: 89.99, description: "Large bird cage", imageUrl: "https://images.unsplash.com/photo-1608848461950-0fed8c9c169d?w=300&h=300&fit=crop" },
  { id: 46, name: "Desk Organizer", category: "Office", price: 24.99, description: "Desktop organizer", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" },
  { id: 47, name: "Notebook", category: "Office", price: 9.99, description: "200-page notebook", imageUrl: "https://images.unsplash.com/photo-1577720643272-265f434b2f1d?w=300&h=300&fit=crop" },
  { id: 48, name: "Stapler", category: "Office", price: 14.99, description: "Heavy duty stapler", imageUrl: "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=300&h=300&fit=crop" },
  { id: 49, name: "Monitor Stand", category: "Office", price: 49.99, description: "Adjustable monitor riser", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" },
  { id: 50, name: "Desk Lamp", category: "Office", price: 39.99, description: "LED desk light", imageUrl: "https://images.unsplash.com/photo-1565636192335-14c46fa1120f?w=300&h=300&fit=crop" },
  { id: 51, name: "Coffee Beans", category: "Food", price: 14.99, description: "Premium coffee beans", imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=300&h=300&fit=crop" },
  { id: 52, name: "Tea Set", category: "Food", price: 29.99, description: "Ceramic tea set", imageUrl: "https://images.unsplash.com/photo-1567318735868-e71b99932e29?w=300&h=300&fit=crop" },
  { id: 53, name: "Honey Jar", category: "Food", price: 12.99, description: "Organic honey", imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop" },
  { id: 54, name: "Olive Oil Bottle", category: "Food", price: 19.99, description: "Extra virgin olive oil", imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=300&fit=crop" },
  { id: 55, name: "Pasta Box", category: "Food", price: 4.99, description: "Artisan pasta", imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop" },
  { id: 56, name: "Car Phone Mount", category: "Auto", price: 19.99, description: "Dashboard phone holder", imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c3ca4b7f1?w=300&h=300&fit=crop" },
  { id: 57, name: "Floor Mats", category: "Auto", price: 34.99, description: "Car floor mats", imageUrl: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=300&h=300&fit=crop" },
  { id: 58, name: "Car Air Freshener", category: "Auto", price: 9.99, description: "Scent air freshener", imageUrl: "https://images.unsplash.com/photo-1617469767537-b85b6b773b40?w=300&h=300&fit=crop" },
  { id: 59, name: "Steering Wheel Cover", category: "Auto", price: 24.99, description: "Leather wheel cover", imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop" },
  { id: 60, name: "Car Organizer", category: "Auto", price: 29.99, description: "Trunk organizer", imageUrl: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=300&h=300&fit=crop" }
];

const categories = [...new Set(products.map(p => p.category))];

// Global State
let model = null;
let uploadedImageFeatures = null;
let allResults = [];
let filteredResults = [];

// DOM Elements
const elements = {
  dropZone: document.getElementById('dropZone'),
  fileInput: document.getElementById('fileInput'),
  urlInput: document.getElementById('urlInput'),
  urlSubmit: document.getElementById('urlSubmit'),
  uploadSection: document.getElementById('uploadSection'),
  modelLoading: document.getElementById('modelLoading'),
  processingSection: document.getElementById('processingSection'),
  processingStatus: document.getElementById('processingStatus'),
  resultsSection: document.getElementById('resultsSection'),
  uploadedImage: document.getElementById('uploadedImage'),
  newSearchBtn: document.getElementById('newSearchBtn'),
  productsGrid: document.getElementById('productsGrid'),
  noResults: document.getElementById('noResults'),
  resultCount: document.getElementById('resultCount'),
  categoryFilter: document.getElementById('categoryFilter'),
  similaritySlider: document.getElementById('similaritySlider'),
  similarityValue: document.getElementById('similarityValue'),
  minPrice: document.getElementById('minPrice'),
  maxPrice: document.getElementById('maxPrice'),
  sortBy: document.getElementById('sortBy'),
  resetFilters: document.getElementById('resetFilters'),
  productModal: document.getElementById('productModal'),
  closeModal: document.getElementById('closeModal'),
  shareBtn: document.getElementById('shareBtn'),
  toast: document.getElementById('toast')
};

// Initialize App
async function init() {
  setupEventListeners();
  populateCategoryFilter();
  await loadModel();
}

// Load TensorFlow Model
async function loadModel() {
  try {
    elements.modelLoading.style.display = 'block';
    model = await mobilenet.load();
    elements.modelLoading.style.display = 'none';
    showToast('AI model loaded successfully', 'success');
  } catch (error) {
    console.error('Error loading model:', error);
    elements.modelLoading.style.display = 'none';
    showToast('Failed to load AI model. Please refresh the page.', 'error');
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Drag and drop
  elements.dropZone.addEventListener('dragover', handleDragOver);
  elements.dropZone.addEventListener('dragleave', handleDragLeave);
  elements.dropZone.addEventListener('drop', handleDrop);
  
  // File input
  elements.fileInput.addEventListener('change', handleFileSelect);
  
  // URL input
  elements.urlSubmit.addEventListener('click', handleUrlSubmit);
  elements.urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUrlSubmit();
  });
  
  // Filters
  elements.similaritySlider.addEventListener('input', handleFilterChange);
  elements.categoryFilter.addEventListener('change', handleFilterChange);
  elements.minPrice.addEventListener('input', debounce(handleFilterChange, 500));
  elements.maxPrice.addEventListener('input', debounce(handleFilterChange, 500));
  elements.sortBy.addEventListener('change', handleFilterChange);
  elements.resetFilters.addEventListener('click', resetFilters);
  
  // New search
  elements.newSearchBtn.addEventListener('click', resetToUpload);
  
  // Modal
  elements.closeModal.addEventListener('click', closeModal);
  elements.productModal.addEventListener('click', (e) => {
    if (e.target === elements.productModal || e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });
  
  // Share button
  elements.shareBtn.addEventListener('click', handleShare);
}

// Populate Category Filter
function populateCategoryFilter() {
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    elements.categoryFilter.appendChild(option);
  });
}

// Drag and Drop Handlers
function handleDragOver(e) {
  e.preventDefault();
  elements.dropZone.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.preventDefault();
  elements.dropZone.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  elements.dropZone.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    processImageFile(file);
  } else {
    showToast('Please drop a valid image file', 'error');
  }
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    processImageFile(file);
  }
}

function handleUrlSubmit() {
  const url = elements.urlInput.value.trim();
  if (!url) {
    showToast('Please enter an image URL', 'error');
    return;
  }
  processImageUrl(url);
}

// Process Image File
function processImageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    processImage(e.target.result);
  };
  reader.onerror = () => {
    showToast('Failed to read image file', 'error');
  };
  reader.readAsDataURL(file);
}

// Process Image URL
function processImageUrl(url) {
  processImage(url);
}

// Main Image Processing Function
async function processImage(imageSrc) {
  if (!model) {
    showToast('AI model is still loading. Please wait...', 'error');
    return;
  }

  // Show processing UI
  elements.uploadSection.style.display = 'none';
  elements.processingSection.style.display = 'block';
  elements.processingStatus.textContent = 'Loading image...';

  try {
    // Load image
    const img = await loadImage(imageSrc);
    elements.processingStatus.textContent = 'Extracting visual features...';

    // Extract features from uploaded image
    uploadedImageFeatures = await extractFeatures(img);
    elements.processingStatus.textContent = 'Calculating similarity scores...';

    // Calculate similarities with all products
    const results = await calculateSimilarities();
    allResults = results;
    filteredResults = results;

    // Show results
    elements.uploadedImage.src = imageSrc;
    elements.processingSection.style.display = 'none';
    elements.resultsSection.style.display = 'block';
    displayResults(filteredResults);
    showToast(`Found ${results.length} similar products!`, 'success');
  } catch (error) {
    console.error('Error processing image:', error);
    elements.processingSection.style.display = 'none';
    elements.uploadSection.style.display = 'block';
    showToast('Failed to process image. Please try again.', 'error');
  }
}

// Load Image
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = src;
  });
}

// Extract Features using MobileNet
async function extractFeatures(img) {
  const tensor = tf.browser.fromPixels(img)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .expandDims();
  
  const features = await model.infer(tensor, true);
  const featuresArray = await features.array();
  tensor.dispose();
  features.dispose();
  
  return featuresArray[0];
}

// Calculate Similarities
async function calculateSimilarities() {
  const results = [];
  
  for (const product of products) {
    try {
      const img = await loadImage(product.imageUrl);
      const features = await extractFeatures(img);
      const similarity = cosineSimilarity(uploadedImageFeatures, features);
      const similarityScore = Math.round(similarity * 100);
      
      results.push({
        product,
        similarity,
        similarityScore
      });
    } catch (error) {
      console.error(`Error processing product ${product.id}:`, error);
    }
  }
  
  // Sort by similarity descending
  results.sort((a, b) => b.similarity - a.similarity);
  return results;
}

// Cosine Similarity
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Apply Filters
function handleFilterChange() {
  const similarityThreshold = parseInt(elements.similaritySlider.value);
  elements.similarityValue.textContent = similarityThreshold;
  
  const selectedCategory = elements.categoryFilter.value;
  const minPrice = parseFloat(elements.minPrice.value) || 0;
  const maxPrice = parseFloat(elements.maxPrice.value) || Infinity;
  const sortBy = elements.sortBy.value;
  
  // Filter results
  filteredResults = allResults.filter(result => {
    if (result.similarityScore < similarityThreshold) return false;
    if (selectedCategory && result.product.category !== selectedCategory) return false;
    if (result.product.price < minPrice || result.product.price > maxPrice) return false;
    return true;
  });
  
  // Sort results
  switch (sortBy) {
    case 'similarity':
      filteredResults.sort((a, b) => b.similarity - a.similarity);
      break;
    case 'price-asc':
      filteredResults.sort((a, b) => a.product.price - b.product.price);
      break;
    case 'price-desc':
      filteredResults.sort((a, b) => b.product.price - a.product.price);
      break;
    case 'category':
      filteredResults.sort((a, b) => a.product.category.localeCompare(b.product.category));
      break;
  }
  
  displayResults(filteredResults);
}

// Reset Filters
function resetFilters() {
  elements.similaritySlider.value = 0;
  elements.similarityValue.textContent = 0;
  elements.categoryFilter.value = '';
  elements.minPrice.value = '';
  elements.maxPrice.value = '';
  elements.sortBy.value = 'similarity';
  
  filteredResults = allResults;
  displayResults(filteredResults);
}

// Display Results
function displayResults(results) {
  elements.resultCount.textContent = results.length;
  elements.productsGrid.innerHTML = '';
  
  if (results.length === 0) {
    elements.noResults.style.display = 'block';
    elements.productsGrid.style.display = 'none';
    return;
  }
  
  elements.noResults.style.display = 'none';
  elements.productsGrid.style.display = 'grid';
  
  results.forEach(result => {
    const card = createProductCard(result);
    elements.productsGrid.appendChild(card);
  });
}

// Create Product Card
function createProductCard(result) {
  const { product, similarityScore } = result;
  
  const card = document.createElement('div');
  card.className = 'product-card';
  card.onclick = () => showProductModal(result);
  
  card.innerHTML = `
    <img src="${product.imageUrl}" alt="${product.name}" class="product-image" loading="lazy">
    <div class="product-body">
      <div class="product-header">
        <h3 class="product-name">${product.name}</h3>
      </div>
      <span class="category-badge">${product.category}</span>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <div class="similarity-section">
        <div class="similarity-header">
          <span class="similarity-text">Match</span>
          <span class="similarity-percentage">${similarityScore}%</span>
        </div>
        <div class="similarity-bar-container">
          <div class="similarity-bar" style="width: ${similarityScore}%"></div>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Show Product Modal
function showProductModal(result) {
  const { product, similarityScore } = result;
  
  document.getElementById('modalImage').src = product.imageUrl;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalCategory').textContent = product.category;
  document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalSimilarityBar').style.width = `${similarityScore}%`;
  document.getElementById('modalSimilarityText').textContent = `${similarityScore}% Match`;
  
  elements.productModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
  elements.productModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Share Product
function handleShare() {
  const productName = document.getElementById('modalTitle').textContent;
  const text = `Check out this product: ${productName}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Visual Product Matcher',
      text: text,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href)
      .then(() => showToast('Link copied to clipboard!', 'success'))
      .catch(() => showToast('Failed to copy link', 'error'));
  }
}

// Reset to Upload
function resetToUpload() {
  elements.resultsSection.style.display = 'none';
  elements.uploadSection.style.display = 'block';
  elements.urlInput.value = '';
  elements.fileInput.value = '';
  uploadedImageFeatures = null;
  allResults = [];
  filteredResults = [];
  resetFilters();
}

// Show Toast
function showToast(message, type = 'info') {
  elements.toast.textContent = message;
  elements.toast.className = `toast ${type}`;
  elements.toast.style.display = 'block';
  
  setTimeout(() => {
    elements.toast.style.display = 'none';
  }, 3000);
}

// Utility: Debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Start the app
init();