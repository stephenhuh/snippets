Step 1/5 : FROM repos.fbn.internal/postgres.server
 ---> 87b7e03952fd
Step 2/5 : ADD *.* /dbsetup/
 ---> Using cache
 ---> 879a53cbaec7
Step 3/5 : WORKDIR /dbsetup
 ---> Using cache
 ---> 396c0f87d72c
Step 4/5 : VOLUME /var/run/postgresql/
 ---> Using cache
 ---> e9c5308dc1b3
Step 5/5 : RUN sudo -u postgres /usr/bin/pg_ctlcluster 9.4 main start && sleep 2 &&     sudo -u postgres /usr/bin/pg_ctlcluster 9.4 main stop &&     sudo -u postgres /usr/bin/pg_ctlcluster 9.4 main start &&     bash resetdb.sh &&     sudo -u postgres vacuumdb -z products &&     sudo -u postgres /usr/bin/pg_ctlcluster 9.4 main stop &&     rm -rf /dbsetup
 ---> Using cache
 ---> 256757789068
Successfully built 256757789068
Attaching to products_products_db_1
products_db_1     | Running Postgres (data dir size: 46M)...
products_db_1     | 2017-06-15 20:35:23.825 UTC [16] LOG:  database system was shut down at 2017-06-15 17:22:37 UTC
products_db_1     | 2017-06-15 20:35:24.007 UTC [16] LOG:  MultiXact member wraparound protections are now enabled
products_db_1     | 2017-06-15 20:35:24.011 UTC [15] LOG:  database system is ready to accept connections
products_db_1     | 2017-06-15 20:35:24.011 UTC [20] LOG:  autovacuum launcher started
Gracefully stopping... (press Ctrl+C again to force)
