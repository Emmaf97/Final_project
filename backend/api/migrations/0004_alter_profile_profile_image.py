# Generated by Django 5.1.1 on 2024-10-12 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_image',
            field=models.ImageField(default='default.png', upload_to='profile_images/'),
        ),
    ]
