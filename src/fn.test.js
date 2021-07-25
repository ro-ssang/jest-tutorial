// mock function

const mockFn = jest.fn();

mockFn.mockResolvedValue({ name: 'Mike' });

test('받아온 이름은 Mike', () => {
  return mockFn().then((res) => {
    expect(res.name).toBe('Mike');
  });
});
