# Generated by Django 3.2.6 on 2021-12-03 12:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('testApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactInfo1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Student1',
            fields=[
                ('contactinfo1_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='testApp.contactinfo1')),
                ('rollno', models.IntegerField()),
                ('marks', models.IntegerField()),
            ],
            bases=('testApp.contactinfo1',),
        ),
        migrations.CreateModel(
            name='Teacher1',
            fields=[
                ('contactinfo1_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='testApp.contactinfo1')),
                ('subject', models.CharField(max_length=256)),
                ('salary', models.FloatField()),
            ],
            bases=('testApp.contactinfo1',),
        ),
    ]
