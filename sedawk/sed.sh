#/bin/bash -xe

sed 's/t/T/g' sed.txt

#edit inline i.e. to the file
#edit inline on osx requires <extension> arg
sed -i "" 's/t/T/g' sed.txt

