document.getElementById('historyBtn').addEventListener('click', function() {
    document.getElementById('donationBtn').style.background = 'transparent';
    document.getElementById('donationBtn').style.border = '1px ridge rgba(165, 165, 165, 0.459)';
    document.getElementById('donationBtn').style.color = 'rgba(17, 17, 17, 0.7)'
    document.getElementById('historyBtn').style.backgroundColor = 'rgb(180, 244, 97)';
    document.getElementById('historyBtn').style.border = 'transparent';
    document.getElementById('historyBtn').style.color = 'black';
});

document.getElementById('donationBtn').addEventListener('click', function() {
    document.getElementById('donationBtn').style.backgroundColor = 'rgb(180, 244, 97)';
    document.getElementById('donationBtn').style.border = 'transparent';
    document.getElementById('donationBtn').style.color = 'black';
    document.getElementById('historyBtn').style.backgroundColor = '';
    document.getElementById('historyBtn').style.border = '1px ridge rgba(165, 165, 165, 0.459)';
    document.getElementById('historyBtn').style.color = 'rgba(17, 17, 17, 0.7)'
});
