using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

// DbSet represents a table in our database ->which we assign the name Activities
// The properties inside this table is going to based on the Activity Class
// Database table == Activities  
// Columns == Domain\Activity

        public DbSet<Activity> Activities { get; set; }
    }
}