using System;

namespace Nexum.Api.Models
{
    public class Contract
    {
        public Guid Id { get; set; }

        public int ContractNumber { get; set; }

        public string ClientName { get; set; } = string.Empty;

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public decimal Value { get; set; }

        public bool IsActive { get; set; }
    }
}
