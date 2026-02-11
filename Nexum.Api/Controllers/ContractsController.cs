using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nexum.Api.Domain.Entities;
using Nexum.Api.Infrastructure.Data;

namespace Nexum.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContractsController : ControllerBase
{
    private readonly NexumDbContext _context;

    public ContractsController(NexumDbContext context)
    {
        _context = context;
    }

    // GET: api/contracts
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Contract>>> GetAll()
    {
        return await _context.Contracts.ToListAsync();
    }

    // GET: api/contracts/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Contract>> GetById(Guid id)
    {
        var contract = await _context.Contracts.FindAsync(id);

        if (contract is null)
            return NotFound();

        return contract;
    }

    // POST: api/contracts
    [HttpPost]
    public async Task<ActionResult<Contract>> Create(Contract contract)
    {
        _context.Contracts.Add(contract);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = contract.Id }, contract);
    }

    // PUT: api/contracts/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, Contract contract)
    {
        if (id != contract.Id)
            return BadRequest();

        _context.Entry(contract).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/contracts/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var contract = await _context.Contracts.FindAsync(id);

        if (contract is null)
            return NotFound();

        _context.Contracts.Remove(contract);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
