from django.db import models

class Farmer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    aadhar_no = models.CharField(max_length=12)
    contact_no = models.CharField(max_length=10)
    area_ploughed = models.FloatField()
    season = models.CharField(max_length=100)
    crop_grown = models.CharField(max_length=100)
    seeds_used = models.CharField(max_length=100)
    date_of_seed_sown = models.DateField()
    transplanting_method = models.CharField(max_length=50, choices=[('manual', 'Manual'), ('machine', 'Machine')])
    irrigation_method = models.CharField(max_length=50, choices=[('borewell', 'Borewell'), ('drip', 'Drip'), ('well', 'Well'), ('river', 'River'), ('rain', 'Rain')])
    fertilizers_used = models.CharField(max_length=50, choices=[('organic', 'Organic'), ('chemical', 'Chemical'), ('bioinputs', 'Bioinputs')])
    date_of_harvesting = models.DateField()
    yield_kg = models.FloatField()

class MediaFile(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    videofile = models.FileField(upload_to='videos/')
    textquery = models.CharField(max_length=100)
    ngouploadvideo = models.FileField(upload_to='ngouploadvideos/', blank=True)
    def __str__(self):
        return f'MediaFile {self.farmer.id}'


