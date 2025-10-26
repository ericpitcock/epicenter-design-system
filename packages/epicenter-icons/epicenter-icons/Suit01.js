import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.0001 11H12M12.0001 14.498H12M12.0001 17.9959H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 4.99825L15.4857 2.90804C16.1523 2.50835 17 2.98848 17 3.76566V6.23084C17 7.00802 16.1523 7.48815 15.4857 7.08847L12 4.99825ZM12 4.99825L8.51428 2.90804C7.84775 2.50835 7 2.98848 7 3.76566V6.23084C7 7.00802 7.84775 7.48815 8.51428 7.08847L12 4.99825Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.046 5L21.029 5.80132C21.5653 5.90922 21.9154 6.42808 21.8147 6.96581L19.3039 20.3683C19.1266 21.3144 18.3006 22 17.3381 22H6.65829C5.69574 22 4.86973 21.3144 4.69249 20.3683L2.18203 6.96762C2.08116 6.42918 2.43227 5.90981 2.96951 5.80276L6.99817 5' })

export default defineComponent({
    name: 'Suit01',
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
