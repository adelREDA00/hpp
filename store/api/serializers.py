from rest_framework import serializers
from basstore.models import Members

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = '__all__'

        def create(self,data):
            return Members.objects.create(**data)
        
        def update(self , instance , data):
            instance.fname = data.get('fname',instance.fname)
            instance.lname = data.get('lname',instance.lname)
            instance.Dbirthday = data.get('Dbirthday',instance.Dbirthday)
            instance.number = data.get('number',instance.number)
            instance.Pbirthday = data.get('Pbirthday',instance.Pbirthday)
            instance.adresse = data.get('adresse',instance.adresse)
            instance.poids = data.get('fname',instance.poids)
            instance.Ssante = data.get('Ssante',instance.Ssante)
            instance.job = data.get('job',instance.job)
            instance.cancerType = data.get('cancerType',instance.cancerType)
            instance.DateDiag = data.get('DateDiag',instance.DateDiag)
            instance.medcinNote = data.get('medcinNote',instance.medcinNote)
            instance.MdeFam = data.get('MdeFam',instance.MdeFam)
            instance.NumMdeFam = data.get('NumMdeFam',instance.NumMdeFam)
            instance.Sfin = data.get('Sfin',instance.Sfin)
            instance.etatCivil = data.get('etatCivil',instance.etatCivil)

            instance.save()
            return instance