using Microsoft.EntityFrameworkCore;
using Nexum.Api.Domain.Entities;

namespace Nexum.Api.Infrastructure.Data;

public class NexumDbContext : DbContext
{
    public NexumDbContext(DbContextOptions<NexumDbContext> options)
        : base(options)
    {
    }

    public DbSet<Contract> Contracts => Set<Contract>();
}
