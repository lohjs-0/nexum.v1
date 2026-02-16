using Microsoft.EntityFrameworkCore;
using Nexum.Api.Models;

namespace Nexum.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Contract> Contracts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contract>()
                .Property(c => c.Value)
                .HasColumnType("numeric(18,2)");

            modelBuilder.Entity<Contract>()
                .HasIndex(c => c.ContractNumber)
                .IsUnique();

            base.OnModelCreating(modelBuilder);
        }
    }
}
