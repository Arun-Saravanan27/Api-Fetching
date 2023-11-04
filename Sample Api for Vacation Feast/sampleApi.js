function searchHotels() {
    const date = document.getElementById("date").value;
    const adults = document.getElementById("adults").value;
    const apiUrl = `https://api.example.com/hotels?location=Chennai&date=${date}&adults=${adults}`;
    const hotelList = document.getElementById("hotelList");
    hotelList.innerHTML = "<h2>Hotels in Chennai:</h2>";
}

function getRoomTypes(hotelId) {
    const apiUrl = `'https://api.tektravels.com/HotelAPIDocument/Default.aspx'/roomTypes?hotelId=${hotelId}`;
}

function checkAvailability(roomId) {
    const apiUrl = `'https://api.tektravels.com/HotelAPIDocument/Default.aspx'/availability?roomId=${roomId}&date=${date}`;
}

function calculateCost() {
}
