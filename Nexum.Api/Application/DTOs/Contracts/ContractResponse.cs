namespace Nexum.Api.Application.DTOs.Contracts
{
    public class ContractResponse
    {
        public Guid Id { get; set; }
        public string ClientName { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal Value { get; set; }
        public bool IsActive { get; set; }
    }
}
