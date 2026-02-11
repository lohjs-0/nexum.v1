using System.ComponentModel.DataAnnotations;

namespace Nexum.Api.Application.DTOs.Contracts
{
    public class CreateContractRequest
    {
        [Required]
        [MaxLength(150)]
        public string ClientName { get; set; } = string.Empty;

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        [Range(0.01, double.MaxValue)]
        public decimal Value { get; set; }
    }
}
