const product = () => {
    const filters = document.querySelectorAll('.filters .select-items div');
    const form = document.querySelector('.category-form');

    try {
        filters.forEach(filter => {
            filter.addEventListener('click', (event) => {
                document.querySelectorAll('.filters select option').forEach(item => {
                    if(event.target.textContent === item.value) {
                        form.submit();
                    }
                });
            });
        });
    } catch(e) {}

};

export default product;