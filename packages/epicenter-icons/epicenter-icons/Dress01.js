import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 12.0001H16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.0008 4.50994C13.3642 4.50994 14.4774 3.50187 14.4774 2.00006L17.5035 2.53187L21 6.52141L18.4756 8.97771L16.5 7.49141L15.9983 12.0285C16.9556 12.4931 19.9376 15.9513 20.0158 22.0001H3.95932C4.08022 17.5798 5.69215 13.7799 8.00931 11.9704L7.49997 7.49236L5.52438 9.0256L3 6.50671L6.49632 2.49887C6.49632 2.49887 8.75714 2.16394 9.5086 2.03005C9.5086 3.31546 10.4995 4.50994 12.0008 4.50994Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Dress01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
