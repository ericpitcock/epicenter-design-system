import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.87124 12.171L9.00514 14V4.25C9.00514 3.2835 9.78864 2.5 10.7551 2.5C11.7216 2.5 12.5051 3.2835 12.5051 4.25V10.5H17C18.6569 10.5 20 11.8431 20 13.5V18.5C20 20.1569 18.6569 21.5 17 21.5H10.07C9.4015 21.5 8.77719 21.166 8.40622 20.6099L4.38941 14.5883C3.87331 13.9531 3.86987 13.0441 4.38114 12.405C4.99565 11.6369 6.12437 11.5308 6.87124 12.171Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Touch03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
