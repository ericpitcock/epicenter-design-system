import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 12.4921L11.7229 10.0477C11.8923 9.70903 12.2385 9.49512 12.6172 9.49512H15.3797C15.7584 9.49512 16.1046 9.70903 16.274 10.0477L17.4969 12.4921', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 9.5V5.5C14 4.94772 14.4477 4.5 15 4.5H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 18.5V13.5C2 12.9477 2.44772 12.5 3 12.5H3.72302C3.90426 12.5 4.0821 12.5493 4.23751 12.6425L6.5 14L8.76249 12.6425C8.9179 12.5493 9.09574 12.5 9.27698 12.5H18.5C20.433 12.5 22 14.067 22 16C22 17.933 20.433 19.5 18.5 19.5H9.27698C9.09574 19.5 8.9179 19.4507 8.76249 19.3575L6.5 18L4.23751 19.3575C4.0821 19.4507 3.90426 19.5 3.72302 19.5H3C2.44772 19.5 2 19.0523 2 18.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Submarine',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
